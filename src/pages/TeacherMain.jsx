import React from 'react'
import { Link, useParams } from 'react-router-dom';

const TeacherMain = () => {
  const {username} = useParams();

  return (
    <>
  
      <div className="flex main">
        <aside style={{ position: "absolute" }} className="sidebar">
          <ul>
            <li>
              <Link to={`/teachers/${username}`} className="active">
                <i className="icon">🏠</i>Home Page
              </Link>
            </li>
            <li>
              <Link to="courses">
              <i className="icon">🎓</i>Courses
              </Link>
            </li>
            <li>
              <Link to="date">
                <i className="icon">🕒</i> Schedule
              </Link>
            </li>
            <li>
              <Link to="tasks">
        <i className="icon">📚</i> Task Management
              </Link>
            </li>
            <li>
              <a href="studentsteach">
                <i className="icon">👩‍🎓</i> Students
              </a>
            </li>
         
            <li>
              <a href="settings">
                <i className="icon">⚙️</i>  Settings
              </a>
            </li>
          </ul>
        </aside>
{/* 
        <div className="flex-1 p-4 ml-64">
    
        </div> */}
      </div>
    </>
  )
}

export default TeacherMain
