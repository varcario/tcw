import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: { 
            id: null,
            token: null
        }
    },
    reducers: {
        initialize: (state, action)=>{
            state.user = action.payload
        }
    }
})

export const { initialize } = userSlice.actions
export default userSlice.reducer
