import * as React from 'react'
import TableContainer from "./studentTable/container";
import TopNavigationBar from "./topNavigationBar";
import { getCohorts, getCourses, getStudents } from '../utils/api';
import { useDispatch } from 'react-redux';
import {addStudents} from '../redux/studentSlice'
import {addCourses, addCohorts} from '../redux/courseSlice.js'


export default function StudentPage() {
  const dispatch = useDispatch()
  const studentFilterInput = React.useRef(null)

  React.useEffect(()=>{
    getStudents().then(res=>res && dispatch(addStudents(res)))
    getCohorts().then(res=>res && dispatch(addCohorts(res)))
    getCourses().then(res=>res && dispatch(addCourses(res)))
  }, [])
  return (
    <section className='h-full flex items-center flex-col'>
      <TopNavigationBar studentFilterInput={studentFilterInput}/>
      <TableContainer studentFilterInput={studentFilterInput}/>
    </section>
  );
}
