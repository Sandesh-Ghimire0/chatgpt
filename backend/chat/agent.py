from langgraph.checkpoint.memory import MemorySaver
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import ChatPromptTemplate,MessagesPlaceholder
from langgraph.graph import StateGraph,START,END
from langgraph.graph.message import AnyMessage,add_messages
from typing import Annotated,List
from typing_extensions import TypedDict
from langgraph.graph.message import RemoveMessage
from langgraph.checkpoint.sqlite import SqliteSaver
import sqlite3


from dotenv import load_dotenv
load_dotenv()


llm = ChatGoogleGenerativeAI(model='gemini-2.0-flash')
sqlite_conn = sqlite3.connect("chatgpt-test.sqlite", check_same_thread=False)
memory = SqliteSaver(sqlite_conn)

class State(TypedDict):
    messages : Annotated[List[AnyMessage], add_messages]


def chat_node(state: State):
    # Take the last 7 messages: the current user message and the last 3 conversation pairs
    trimmed_messages = state['messages'][-7:]
    prompt = ChatPromptTemplate.from_messages(
        [
            ("system","you are an assistant"),
            MessagesPlaceholder("messages")
        ]
    )
    chain = prompt | llm
    response = [chain.invoke({"messages":trimmed_messages})]

    return {"messages":response }

graph = StateGraph(State)

graph.add_node("chat_node",chat_node)

graph.add_edge(START, "chat_node")
graph.add_edge("chat_node",END)

workflow = graph.compile(checkpointer=memory)
