import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentsForTeacher = () => {
    const [students, setStudents] = useState([])


    useEffect(() => {

        axios
            .get("https://aquatic-supreme-saga.glitch.me/users")
            .then((response) => {
                const data = response.data
                console.log(data);
                const newData = data.filter((r) => r.role === "student")
                console.log(newData);
                setStudents(newData)

            })


    }, [])






    return (
        <>
            <div style={{ paddingLeft: "350px", paddingTop: "40px" }}>

                {students.map((item) => (

                    <div key={item.id} style={{ paddingTop: "60px", marginRight: "180px" }}>
                        <div
                            style={{
                                backgroundColor: "#e1c2ff",
                                padding: "60px",
                                marginBottom: "10px",
                                borderRadius: "10px",
                                display: "flex"
                            }}
                        >
                            <div >


                                <h1 style={{ fontSize: "30px" }}>{item.fullName}</h1>

                                <div style={{ display: "flex", gap: "500px" }}>

                                    <p style={{ paddingTop: "30px" }}>{item.email}</p>
                                    <div class="circle-container">
                                        <div class="circle" id="circle">
                                            <span id="average-text">{item.overallGrade}</span>
                                        </div>
                                    </div>                                </div>
                            </div>

                        </div>
                    </div>

                ))}




            </div>
        </>
    )
}

export default StudentsForTeacher
