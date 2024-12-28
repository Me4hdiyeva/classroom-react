import React from 'react'
import Navbar from '../components/student/Navbar'
import { Outlet } from 'react-router-dom'

const StudentLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default StudentLayout
