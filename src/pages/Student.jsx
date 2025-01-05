import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
 
const Student = () => {
  const {username} = useParams();
  const [classes , setClasses] = useState();
  useEffect(()=>{
    axios
    .get("https://aquatic-supreme-saga.glitch.me/classes")
    .then((response) => {
        const data = response.data
        console.log("data", data);
        setClasses(data);
    })
    .catch((err) => {
        console.log(err);
    })

  },[])



    return (
        <>
            <div className="flex main">
                   <aside style={{position:"absolute"}} className="sidebar">
      <ul>
        <li>
          <Link to={`/student/${username}`}   className="active">
            <i className="icon">🏠</i> Главная страница
          </Link>
        </li>
        <li>
          <Link to="calendar">
            <i className="icon">📅</i> Календарь
          </Link>
        </li>
        <li>
          <Link  to="tasks">
         <i className="icon">📚</i> Список заданий
          </Link>
        </li>
        <ul>
        {classes && classes.length > 0 ? (
            classes.map((item) => (
                <li key={item.id}>
                    <Link to={ `/student/Mehdiyeva/tasks/details/${item.name}`}>
                        <i className="icon">🔵</i> 
                        {item.name}
                    </Link>
                </li>
            ))
        ) : (
            <li></li>
        )}
    </ul>
      
        <li>
          <a href="#">
            <i className="icon">⚙️</i> Настройки
          </a>
        </li>
      </ul>
    </aside>

            
                <div className="flex-1 p-4 ml-64">

                </div>
            </div>
      </>
    );
};

export default Student;


