import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherMain from '../pages/TeacherMain'
import Navbar from '../components/student/Navbar'

const TeacherLayout = () => {
  return (
    <div>
     {/* <NavbarTeacher/> */}
     <Navbar/>
     <TeacherMain/>
      <Outlet />
    </div>
  )
}

export default TeacherLayout
