import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Mainpages = () => {
    const [classe, setClasse] = useState([]);
    const [task, setTasks] = useState([]);
    const { username } = useParams();
    const [fullnames, setFullnames] = useState([]);

    const name = username.at(0); // username-in ilk hərfini alırıq
    console.log(name);

    useEffect(() => {
        setFullnames(name); 
        axios
            .get("https://aquatic-supreme-saga.glitch.me/tasks")
            .then((response) => {
                const nameclass = response.data;
                console.log("nameclass", nameclass);
                setClasse(nameclass);

                axios
             
            })
            .catch((error) => {
                console.error("Xəta baş verdi:", error.message);
            });
    }, []);

    return (
        <div style={{paddingLeft:"300px"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 py-5">
            {classe.map((item) => (
                <Link   to={`/student/Mehdiyeva/tasks/details/${item.classId}`}>
                

                <div key={item.id} className="bg-white shadow-lg rounded-lg max-w-sm">
                    <div style={{ backgroundColor: "#f0e0ff", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} className="p-1">
                        <div style={{
                            borderRadius: "50%",
                            position:"absolute",
                            width: "40px",
                            height: "40px",
                            marginLeft: "220px",
                            marginTop: "10px",
                            backgroundColor:"#4d167a",
                            color:"#FFFFFF",
                            paddingTop:"7px",
                            paddingLeft:"14px"
                        }}>
                            {fullnames}
                        </div>
                        <div style={{ paddingLeft: "20px" }} className="flex">
                            <div>
                                <h1 style={{ paddingTop: "10px" }} className="text-xl text-[#4d167a] font-bold mb-8">{item.classId}</h1>
                                <h4 style={{ paddingTop: "10px" }} className="mb-9 font-bold text-[#4d167a]">CLASS ROOM</h4>
                            </div>
                        </div>
                    </div>

                    {/* Son tarix ve tapşırıq haqqında məlumat */}
                    <div style={{ paddingBottom: "100px" }} className="p-5 text-[#4d167a]">
                        <p>Son tarix: {item.deadline}</p>
                        <Link    to={`/student/Mehdiyeva/tasks/details/${item.classId}`}>{item.description}</Link>
                    </div>
                </div>
                
                </Link>
            ))}
        </div>
    );
};

export default Mainpages;
