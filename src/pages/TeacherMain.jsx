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
                <i className="icon">🏠</i> Главная страница
              </Link>
            </li>
            <li>
              <Link to="courses">
                <i className="icon">🏠</i>Courses
              </Link>
            </li>
            <li>
              <Link to="date">
                <i className="icon">🕒</i> Расписание
              </Link>
            </li>
            <li>
              <Link to="tasks">
        <i className="icon">📚</i> Управление заданиями
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="icon">👩‍🎓</i> Студенты
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon">📂</i> Архив курсов
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon">⚙️</i> Настройки
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
