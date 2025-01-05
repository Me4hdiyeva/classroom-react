import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Tasks = () => {

    const [task, setTasks] = useState([]);
    const [name, setName] = useState([]);
    useEffect(() => {
        axios
            .get("https://aquatic-supreme-saga.glitch.me/tasks")
            .then((response) => {
                const data = response.data
                console.log(data);
                setTasks(data);

            })
            .catch((err) => {
                console.log(err);



            })





    }, [])
    return (
        <div>


            {
                task.map((item) => (

                    <div key={item.id} style={{ marginLeft: "280px", paddingTop: "60px", marginRight: "180px" }}>
                        <div
                            style={{
                                backgroundColor: "#e1c2ff",
                                padding: "20px",
                                marginBottom: "10px",
                                borderRadius: "10px",
                                display: "flex"
                            }}
                        >
                            <div>

                          
                            <h1>{item.classId}</h1>
                     
                                <div style={{display:"flex", gap:"20px", paddingTop:"40px"}}>

                                <p>{item.title}</p>
                                <p className=''>{item.deadline}</p>
                                </div>
                            </div>
                            <div style={{
                                paddingLeft: "780px",
                                paddingTop: "10px",
                                fontSize: "40px",




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
