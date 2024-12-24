import * as React from 'react'
import './App.css'
import LeftMenu from './custom_components/leftMenu'
import StudentPage from './custom_components/studentPage'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <LeftMenu/>
      <section className='bg-slate-100 w-full'>
        <Routes>
          <Route path='/' element={<StudentPage/>}/>
          <Route path='students' element={<StudentPage/>}/>
          <Route path='chapters' element={<span className='size-full flex justify-center items-center'>Chapters</span>}/>
          <Route path='dashboard' element={<span className='size-full flex justify-center items-center'>Dashboard</span>}/>
          <Route path='help' element={<span className='size-full flex justify-center items-center'>Help</span>}/>
          <Route path='settings' element={<span className='size-full flex justify-center items-center'>Settings</span>}/>
          <Route path='reports' element={<span className='size-full flex justify-center items-center'>Reports</span>}/>
        </Routes>
      </section>
    </>
  )
}

export default App
