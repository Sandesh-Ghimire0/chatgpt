import  {createSlice} from '@reduxjs/toolkit'


const initialState = {
    loading:false,
    userInfo:{},
    success:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state, action) => {
            state.success = true
            state.userInfo = action.payload
        },
        logout:(state, action) => {
            state.loading = false
            state.userInfo = {}
            state.success = false
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer