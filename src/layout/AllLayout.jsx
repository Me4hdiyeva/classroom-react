import React from 'react'
import Navbar from '../components/student/Navbar'
import { Outlet } from 'react-router-dom'

const AllLayout= () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default AllLayout
