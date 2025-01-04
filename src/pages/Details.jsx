import React, { useEffect, useState } from 'react'

const Details = () => {

    const[task,setTasks]= useState([]);
    useEffect(() => {
        axios
            .get("https://full-translucent-cut.glitch.me/materials")
            .then((response) => {
                const tasks = response.data;
                console.log(tasks);
                setTasks(tasks)


            })
            .catch((error) => {
                console.error("Xəta baş verdi:", error.message);
            });
    }, [])
  return (
    <div>
      xsac
    </div>
  )
}

export default Details
