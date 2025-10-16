import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recent_chats : []
}


const recentChatSlice = createSlice({
    name:'recentChat',
    initialState,
    reducers:{
        addRecentChat:(state, action)=>{
            state.recent_chats = action.payload
        }
    }
})


export const { addRecentChat } = recentChatSlice.actions
export default recentChatSlice.reducer