import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: [],
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addChat: (state, action) => {
            if (action.payload.update) {
                if (state.chats.length > 0) {
                    state.chats[state.chats.length - 1].answer =
                        action.payload.answer;
                }
            } else {
                state.chats.push({
                    question: action.payload.question,
                    answer: action.payload.answer,
                });
            }
        },
        addHistory: (state, action) => {
            state.chats = action.payload;
        },
    },
});

export const { addChat, addHistory } = chatSlice.actions;
export default chatSlice.reducer;
