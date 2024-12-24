export const addStudent = async(student: Student)=>{
    try{
        const raw = await fetch(`${import.meta.env.VITE_SERVER}/student`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        const res = await raw.json()

        if(raw.status>=200 && raw.status<300){
            return res.data
        }else {
            
        }
    }catch(e){

    }
}

export const getStudents = async()=>{
    try{
        const raw = await fetch(`${import.meta.env.VITE_SERVER}/student`, {
            method: 'GET',
        })
        const res = await raw.json()
        if(raw.status>=200 && raw.status<300){
            const students = res.data
            return students
        }else {
            
        }
    }catch(e){

    }

}

export const deleteStudent = async(roll_number: string)=>{
    try{
        const raw = await fetch(`${import.meta.env.VITE_SERVER}/student/${roll_number}`, {
            method: 'DELETE',
        })

        if(raw.status>=200 && raw.status<300){
            
        }else {
            
        }
    }catch(e){

    }
}

export const getCourses = async()=>{
    try{
        const raw = await fetch(`${import.meta.env.VITE_SERVER}/utils/courses`, {
            method: 'GET',
        })
        const res = await raw.json()
        if(raw.status>=200 && raw.status<300){
            const courses = res.data
            return courses
        }else {
            
        }
    }catch(e){

    }

}

export const getCohorts = async()=>{
    try{
        const raw = await fetch(`${import.meta.env.VITE_SERVER}/utils/cohorts`, {
            method: 'GET',
        })
        const res = await raw.json()
        if(raw.status>=200 && raw.status<300){
            const courses = res.data
            return courses
        }else {
            
        }
    }catch(e){

    }

}

export type Student = {
    name: string, 
    lastLogin: string,
    status: boolean,
    courseId: string,
    cohortId: string
}