import { configureStore } from "@reduxjs/toolkit";
import studentSlice from './studentSlice.js'
import courseSlice from './courseSlice.js'

const rootReducer =  configureStore({
    reducer:{
        student: studentSlice,
        course: courseSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootReducer.dispatch