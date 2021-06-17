import { configureStore } from '@reduxjs/toolkit'
import typeReducer from './typeSlice'

export default configureStore({
    reducer:{
        type: typeReducer
    }
})