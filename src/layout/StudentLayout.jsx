import React from 'react'
import Navbar from '../components/student/Navbar'
import { Outlet } from 'react-router-dom'
import TeacherMain from '../pages/TeacherMain'
import Student from '../pages/Student'

const StudentLayout = () => {
  return (
    <>
      <Navbar/>
      {/* <TeacherMain/> */}
      
      <Student/>
      <Outlet/>
    </>
  )
}

export default StudentLayout
