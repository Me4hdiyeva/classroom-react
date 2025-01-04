import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Mainpages = () => {
    const [tasks, setTasks] = useState([]);
    const [fullnames, setFullnames] = useState([]);

    useEffect(() => {
        axios
            .get("https://full-translucent-cut.glitch.me/tasks")
            .then((response) => {
                const tasks = response.data;
                console.log(tasks);
                setTasks(tasks);
                
          
                axios
                    .get("https://full-translucent-cut.glitch.me/users")
                    .then((response) => {
                        const users = response.data;
                  
                        const names = users.map(element => element.fullName.at(0));
                        console.log("fullnames", names);
                        setFullnames(names); 
                    })
            })
            .catch((error) => {
                console.error("Xəta baş verdi:", error.message);
            });
            
    }, []);

    return (
        <div>
            {tasks.map((item, index) => (
                <div key={item.id} style={{ padding: "20px", margin: "170px", paddingLeft: "150px" }}>
                    <div className="bg-white shadow-lg rounded-lg max-w-sm">
                        <div style={{ backgroundColor: "#f0e0ff", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} className='p-1'>
                           
                            {fullnames[index] && (
                                <div style={{
                                    // border: "2px solid",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    marginLeft: "330px",
                                    marginTop: "20px",
                                    backgroundColor:"#4d167a",
                                    color:"#FFFFFF",
                                    paddingTop:"7px",
                                    paddingLeft:"17px"
                                }}>
                                    {fullnames[index]}
                                </div>
                            )}
                        <div style={{ paddingLeft: "20px" }} className='flex'>
                            <div>
                                <h1 style={{ paddingTop: "20px" }} className="text-xl text-[#4d167a] font-bold mb-8">{item.title}</h1>
                                <h4 style={{ paddingTop: "10px" }} className='mb-9 font-bold text-[#4d167a]'>CLASS ROOM</h4>
                            </div>
                        </div>
                        </div>


                        <div style={{ paddingBottom: "100px" }} className='p-5 text-[#4d167a]'>
                            <p>son tarix : {item.deadline}</p>
                            <Link to={`/details/${item.id}`}>{item.description}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Mainpages;
