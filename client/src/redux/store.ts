import { configureStore } from "@reduxjs/toolkit";
import studentSlice from './studentSlice'
import courseSlice from './courseSlice'


const rootReducer = configureStore({
    reducer: {
        student: studentSlice,
        course: courseSlice
    }
})

export default rootReducer

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootReducer.dispatch