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
                axios
                    .get("https://aquatic-supreme-saga.glitch.me/classes")
                    .then((response) => {
                        const classes = response.data
                        console.log(classes);

                        // console.log(clasdata);
                        setName(classes)



                    })
                    .catch((err) => {
                        console.log(err);

                    })


            })
            .catch((err) => {
                console.log(err);



            })





    }, [])
    return (
        <div>
            {
                name.map((index) => (
                    <div style={{
                        backgroundColor: "#563a70",
                        borderRadius: "10px",
                        padding: "50px",
                        marginLeft: "280px",
                        marginRight: "10px",
                        color: "#ffffff",
                        fontSize: "40px"
                    }}>
                        {index.name}
                    </div>
                ))
            }




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

                                <h1 className='font-bold p-5 ' style={{ fontSize: "18px" }}>
                                    <Link to={`/student/Mehdiyeva/tasks/details/t1`}> {item.title}</Link>

                                </h1>

                                <p className='p-5'>{item.deadline}</p>
                            </div>
                            <div style={{
                                paddingLeft: "660px",
                                paddingTop: "30px",
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
