import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo from "../assets/img/Mathematicsamico.png";

const Teacherhome = () => {
  const navigete = useNavigate()
  const {username} = useParams()
  const onClick = () => {
navigete ("classes")
  }
  return (
    <>
      <div style={{ paddingLeft: "400px", paddingTop: "100px" }}>

        <h1 style={{ fontSize: "40px" }} className='font-bold'>Welcome,{username}!</h1>
        <p>You are logged in as a teacher. Here, you can manage your courses and assignments.</p>
        <div style={{ width: "250px", marginTop: "80px", marginLeft: "350px" }}>
          <img src={logo} alt="" />
        </div>
        <p style={{ marginLeft: "380px", paddingTop: "20px" }}>To get started, add a course!</p>
        <button onClick={onClick} className='btn-creat' style={{ marginLeft: "420px" }}>Create Course</button>

      </div>

    </>
  )
}

export default Teacherhome
