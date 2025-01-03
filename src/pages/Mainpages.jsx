import axios from 'axios'
import React, { useEffect } from 'react'


const Mainpages = () => {
    const [tasks, setTasks] = useEffect()
  return (
    <>   
    useEffect(() {
        axios 
        .get("https://full-translucent-cut.glitch.me/task")
        .then((response)=> {
           setTasks(response.data) 
        })
        .catch((err)=>{
          console.error(e);
          
        })
    })
    <div>
      <div style={{border:"5px solid", padding:"20px", margin:"170px"}}>
     
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm">
        <div>

      <h1  className="text-xl font-bold mb-2">name</h1>
      <h4>sinif otagi</h4>
      {/* <button>kurssu terk edin</button> */}

        </div>
        <div>
            <p>son tarix : date</p>
            <a href="">tapshirigin adi</a>
        </div>

    </div>

      </div>
    </div>
    </>
  
  )
}

export default Mainpages
