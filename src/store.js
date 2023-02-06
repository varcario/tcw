import { configureStore } from '@reduxjs/toolkit'
import groupReducer from './features/group/group-slice';

export default configureStore({
  reducer: {
    group: groupReducer
  }
})