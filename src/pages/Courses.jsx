import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);

   
    useEffect(() => {
        axios
            .get("https://full-translucent-cut.glitch.me/classes")
            .then((response) => {
                setCourses(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); 

    const onClick = (id) => {
        axios
            .delete(`https://full-translucent-cut.glitch.me/classes/${id}`)
            .then((response) => {
                console.log( response.data);
                setCourses(courses.filter(course => course.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
   <div style={{paddingLeft:"330px"}} className="px-15 pt-24">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
            <div key={course.id} className="bg-[#fffff] rounded-lg p-4">
                <div style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}  className="p-1  bg-[#F0E0FF]">
                    <div className="flex pl-5">
                        <div>
                            <h1 className="text-xl text-[#4d167a] font-bold mb-8">{course.name}</h1>
                            <h4 className="font-bold text-[#4d167a] mb-9">CLASS ROOM</h4>
                        </div>
                    </div>
                </div>
                <div className="p-5 text-[#4d167a]">
                    <p>{course.major}</p>
                    <button style={{marginLeft:"140px", paddingTop:"5px", marginTop:"40px"}}  onClick={() => onClick(course.id)} className="mt-3 text-white bg-[#9553A0] px-4 py-2 rounded-md">Delete</button>
                </div>
            </div>
        ))}
    </div>
</div>


        </>
    );
};

export default Courses;
