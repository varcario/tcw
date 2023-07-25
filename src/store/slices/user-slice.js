import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        authenticatedUser: { 
            id: null,
            token: null
        }
    },
    reducers: {
        initialize: (state, action)=>{
            state.authenticatedUser = action.payload
        }
    }
})

export const { initialize } = userSlice.actions
export default userSlice.reducer
