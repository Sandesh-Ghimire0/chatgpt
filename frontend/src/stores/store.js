import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import chatReducer from './chatSlice'
import recentChatReducer from './recentChat'


export const store = configureStore({
    reducer:{
        auth:authReducer,
        chat:chatReducer,
        recentChat:recentChatReducer
    }
})
