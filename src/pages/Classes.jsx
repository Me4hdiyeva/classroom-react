import axios from 'axios'
import React, { useState } from 'react'

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [name, setName] = useState([]);
    const [topics, setTopics] = useState([]);
    const [major, setMajor] = useState([])

    const handelSubmit= ((e)=>{
        e.preventDefault()
        axios 
        .post("https://aquatic-supreme-saga.glitch.me/classes",{
            name : name,
            major : major,
            topics : topics
        })
        .then((response)=>{
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
            
        })

    })

    


    return (
        <div>
            <form onSubmit={handelSubmit} style={{
                paddingLeft: "400px", paddingTop: "50px"
            }}>
                <h1 className='font-bold' style={{ paddingLeft: "350px", fontSize: "30px", paddingTop: "30px" }}>Create Course!</h1>
                <input className='name' value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Course Name" required />
                <input className='topics' value={topics} onChange={(e) => setTopics(e.target.value)} type="text" id="topics" name="topics" placeholder="Topics" required />
                <input className='major' value={major} onChange={(e) => setMajor(e.target.value)} type="text" id="major" name="major " placeholder="Major" required />
                <button type='submit' className='btn-creat' style={{ marginLeft: "420px" }}>Create Course</button>
            </form>
        </div>
    )
}

export default Classes
