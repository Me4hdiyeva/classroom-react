import React from 'react'
import Navbar from '../components/student/Navbar'
import { Outlet } from 'react-router-dom'
import TeacherMain from '../pages/TeacherMain'

const StudentLayout = () => {
  return (
    <>
      <Navbar/>
      <TeacherMain/>
      <Outlet/>
    </>
  )
}

export default StudentLayout
