import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Mainpages = () => {
    const [classe, setClasse] = useState([]);
    const [task, setTasks] = useState([]);
    const { username } = useParams();
    const [ fullnames, setFullnames] = useState([])
    // console.log(username);
    const name = username.at(0)
    console.log(name);
    // setFullnames(name)
    

    useEffect(() => {
        setFullnames(name); 
        axios
            .get("https://aquatic-supreme-saga.glitch.me/classes")
            .then((response) => {
                const nameclass = response.data;
                console.log(nameclass);
                setClasse(nameclass);
                    
          
                axios
                    .get("https://aquatic-supreme-saga.glitch.me/tasks")
                    .then((response) => {
                        const task = response.data;
                        console.log(task);
                        
                  
                        // const names = users.map(element => element.fullName.at(0));
                        // console.log("fullnames", names);
                        // console.log("name",name);
                        
                        setTasks(task); 
                    })
            })
            .catch((error) => {
                console.error("Xəta baş verdi:", error.message);
            });
            
    }, []);

    return (
        
        <div>
            {classe.map((item, index) => (
                <div key={item.id} style={{ padding: "20px", margin: "100px", paddingLeft: "230px", paddingTop:"5px" }}>
                    <div className="bg-white shadow-lg rounded-lg max-w-sm">
                        <div style={{ backgroundColor: "#f0e0ff", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} className='p-1'>
                           
                           
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
                                    paddingLeft:"14px"
                                }}>
                                    {fullnames[index]}
                                </div>
                           
                        <div style={{ paddingLeft: "20px" }} className='flex'>
                            <div>
                                <h1 style={{ paddingTop: "10px" }} className="text-xl text-[#4d167a] font-bold mb-8">{item.name}</h1>
                                <h4 style={{ paddingTop: "10px" }} className='mb-9 font-bold text-[#4d167a]'>CLASS ROOM</h4>
                            </div>
                        </div>
                        </div>

                        {
                            task.map((index)=>(
                                <div style={{ paddingBottom: "100px" }} className='p-5 text-[#4d167a]'>
                                <p>son tarix : {index.deadline}s</p>
                                <Link to="tasks">{index.description}</Link>
                            </div>
                            ))

                        }


                      
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Mainpages;
