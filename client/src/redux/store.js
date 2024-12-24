import { configureStore } from "@reduxjs/toolkit";
import studentSlice from './studentSlice.js'
import courseSlice from './courseSlice.js'

export default configureStore({
    reducer:{
        student: studentSlice,
        course: courseSlice
    }
})