import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Tasks = () => {

    const [task, setTasks] = useState([]);
    useEffect(() => {
        axios
            .get("https://full-translucent-cut.glitch.me/tasks")
            .then((response) => {
                const data = response.data
                console.log(data);
                setTasks(data)

            })
            .catch((err) => {
                console.log(err);
          
                

            })
    })
    return (
        <div>
            
            {
                task.map((item)=>(
               
            <div key={item.id} style={{ padding: "20px", margin: "170px", paddingLeft: "150px" }}>
                <div
                    style={{
                        backgroundColor: "#e1c2ff",
                        padding: "20px",
                        marginBottom: "10px",
                        borderRadius: "5px",
                        display:"flex"
                    }}
                >
                    <div>

                    <Link to="">
                    <h1 className='font-bold p-5' style={{font:"bold"}}>{item.title}</h1>
                    </Link>
                    <p className='p-5'>{item.deadline}</p>
                    </div>
                    <div style={{paddingLeft:"690px",
                        paddingTop:"50px",
                        fontSize:"40px"
                    
                    
                    
                    }}>
                          <i className="icon">📋</i> 
                    </div>
                </div>
            </div>

                ))
            }


        </div>
    )
}

export default Tasks
