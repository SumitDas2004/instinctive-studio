import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name:"course",
    initialState:{
        courses: [],
        cohorts: []
    },
    reducers: {
        addCourses: (state, action)=>{
            state.courses = action.payload
        },
        addCohorts: (state, action)=>{
            state.cohorts = action.payload
        }
    }
})

export default courseSlice.reducer

export const {addCourses, addCohorts} = courseSlice.actions
