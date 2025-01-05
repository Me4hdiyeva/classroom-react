import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Details = () => {

    const[task,setTasks]= useState([]);
    useEffect(() => {
        axios
            .get("https://aquatic-supreme-saga.glitch.me/tasks")
            .then((response) => {
                const tasks = response.data;
                console.log(tasks);
                setTasks(tasks)


            })
            .catch((error) => {
                console.error("Xəta baş verdi:", error.message);
            });
    }, [])
  return (
    <div>
 <div style={{display:"flex"}}>
      <div style={{
        // border:"2px solid",
        marginLeft:"300px",
        // marginRight:"470px",
        marginTop:"10px"
      }}>
        {task.map((index)=>(
          <div style={{paddingLeft:"30px", paddingTop:"30px"}} >

            <h1 className='font-bold' style={{ fontSize:"20px"}} >{index.title}-{index.description}</h1>
            <p style={{paddingTop:"20px", paddingBottom:"10px"}}>{index.createdAt}</p>
            <div style={{display:"flex", paddingRight:"20px"}}>
              <p>homework</p>
              <p style={{paddingLeft:"600px"}}>{index.deadline}</p>
            </div>
            <p>`{index.completionRate} ball</p>
            <hr style={{width:"850px"}} />
            <p></p>

          </div>
   
        
          

        ))}

      </div>
      <div style={{
        display:"flex",
        flexDirection:"column"
      }}>

      <div style={{
          //  border:"2px solid",
          //  padding:"130px",
           marginLeft:"10px",
           width:"300px",
           height:"300px"
          //  marginRight:"380px",
          //  marginTop:"10px"
      }}>
<p style={{
  textAlign:"center",
  paddingTop:"40px"
}}>My assignements</p>
<input className='inp' type="url" id="website" name="website" placeholder="https://example.com" required />
<button className='btn-sbm'>Submit</button>

      </div>
      <div style={{
          //  border:"2px solid",
          //  padding:"130px",
           marginLeft:"10px",
           width:"300px",
          //  height:"400px"
          //  marginRight:"380px",
          //  marginTop:"10px"
      }}>
<p style={{
  textAlign:"center",
  paddingTop:"40px"
}}>Comments</p>
<input className='inp' type="text" id="website" name="website" placeholder="comments" required />
<button className='btn-sbm'>Submit</button>

      </div>
      </div>

 </div>
 
    </div>
  )
}

export default Details
