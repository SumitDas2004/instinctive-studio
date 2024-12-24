import {prismaClient} from '../utils/prisma.js'

export const getCourses= async()=> {
    return await prismaClient.course.findMany({
        include: {
            taught_by :true
        }
    })
}

export const getCohorts = async() => {
    return await prismaClient.cohort.findMany()
}