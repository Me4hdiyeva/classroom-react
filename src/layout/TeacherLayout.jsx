import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarTeacher from '../components/teacher/NavberTeacher'

const TeacherLayout = () => {
  return (
    <div>
     <NavbarTeacher/>
      <Outlet />
    </div>
  )
}

export default TeacherLayout
