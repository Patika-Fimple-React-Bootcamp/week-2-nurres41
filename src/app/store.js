import { configureStore } from '@reduxjs/toolkit'
import postSlice from '../features/postSlice'

const store = configureStore({
    reducer:{
        postSlice: postSlice
    }
})

export default store