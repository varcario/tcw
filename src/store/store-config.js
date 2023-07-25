import { configureStore } from '@reduxjs/toolkit'
import recordReducer from './slices/record-slice'
import userReducer from './slices/user-slice'

export default configureStore({
    reducer: {
        record: recordReducer
    }
})