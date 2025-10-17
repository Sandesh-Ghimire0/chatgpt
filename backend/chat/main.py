
from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI, HTTPException, Body, Query
from fastapi.responses import JSONResponse, StreamingResponse
from agent import workflow  
from pydantic import BaseModel, Field
from langchain_core.messages import HumanMessage, AIMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
import uuid
from typing import Optional
from pymongo import MongoClient
import os
from fastapi.middleware.cors import CORSMiddleware




CLIENT = os.getenv("MONGODB_CLIENT")
FRONTEND_URL = os.getenv("FRONTEND_URL")
GATEWAY_URL = os.getenv("GATEWAY_URL")


app = FastAPI()

origins = [
    FRONTEND_URL,  #  React server
    GATEWAY_URL,  # backend proxy
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["*"] for all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient(CLIENT)
db = client.chatgpt_recent
items_collection = db.items


class Question(BaseModel):
    question:str

class Title(BaseModel):
    title: str = Field(description='3 to 5 word title')


def get_title(question, answer):
    llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash')
    structured_llm = llm.with_structured_output(Title)
    prompt = PromptTemplate(
        template='''Generate a 3 to 5 word title for this question answer pair \n question:{question} \n answer:{answer}''',
        input_variables=['question','answer']
    )

    chain = prompt | structured_llm
    result = chain.invoke({
        'question':question,
        'answer':answer
    }).model_dump()

    return result['title']


def event_stream(question, thread_id, google_id):
    try:
        no_title = False
        answer = ''
        if thread_id == 'undefined':
            no_title = True
            thread_id = str(uuid.uuid4())


        CONFIG = {"configurable":{'thread_id':thread_id}}
        input_state = {"messages":[question]}

        for message_chunk, metadata in workflow.stream(
            input_state, config=CONFIG, stream_mode='messages'
        ):
            if message_chunk.content:
                answer += message_chunk.content
                yield f"data: {message_chunk.content}\n\n"

        if no_title:
            title = get_title(question, answer)
            items_collection.insert_one({
                'title':title,
                'thread_id':thread_id ,
                'google_id':google_id
            })
        yield f"event: end\ndata: {thread_id}\n\n"

    except Exception as e:
        yield f"event: error\ndata: {str(e)}\n\n"

    


@app.get('/')
def home():
    return {"Message":"Fastapi server is Running"}



@app.get('/response/{thread_id}')    
async def generate_response(thread_id:Optional[str] = None,google_id:Optional[str] = None, question:str = Query(...)):
    try:
        return StreamingResponse(
            event_stream(question, thread_id,google_id),
            media_type="text/event-stream"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.get("/history")
def get_history(thread_id: Optional[str] = None):
    try:
        chat_history = []
        if thread_id != "undefined":
            CONFIG = {"configurable":{'thread_id':thread_id}}
            history_snapshots = list(workflow.get_state_history(config=CONFIG))

            all_messages = history_snapshots[0].values['messages']


            question = None
            for msg in all_messages:
                if msg.type == 'human':
                    question = msg.content

                elif msg.type == 'ai' and question is not None:
                    answer = msg.content
                    chat_history.append({'question':question,'answer':answer})
                    question = None

        return JSONResponse(status_code=200, content=chat_history)
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    

@app.get('/recent-chat')
def get_recent_chat(google_id : Optional[str] = None):
    recent_chat = list(items_collection.find({"google_id":google_id}))  # convert cursor → list
    # Convert ObjectId to string because ObjectId is not JSON serializable
    for chat in recent_chat:
        chat["_id"] = str(chat["_id"])
    return JSONResponse(
        status_code=200,
        content=recent_chat
    )


