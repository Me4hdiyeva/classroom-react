import React from 'react'

const Classes = () => {
  return (
    <div>
     <div style={{
        paddingLeft:"400px", paddingTop:"50px"
     }}>
        <h1 className='font-bold' style={{paddingLeft:"350px", fontSize:"30px", paddingTop:"30px"}}>Create Course!</h1>
        <input className='inp' type="text" id="website" name="website" placeholder="Course Name" required />
        <input className='inp' type="text" id="website" name="website" placeholder="Topics" required />

        <input className='inp' type="text" id="website" name="website" placeholder="Major" required />

        <button  className='btn-creat' style={{ marginLeft: "420px" }}>Create Course</button>



     </div>
    </div>
  )
}

export default Classes
