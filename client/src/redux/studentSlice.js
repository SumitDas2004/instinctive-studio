import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    initialState: {
        students: []
    }, 
    name: "STUDENT",
    reducers: {
        addStudents: (state, action)=>{
            if(Array.isArray(action.payload))
                state.students = [...state.students, ...action.payload]
            else
                state.students = [action.payload, ...state.students]
        },
        deleteStudent: (state, action)=>{
            // Keeping all the students that do not match the given roll_number
            state.students = state.students.filter(student=>student.roll_number!==action.payload)
        }
    }
})

export const {addStudents, deleteStudent} = studentSlice.actions

export default studentSlice.reducer