import React from 'react';
import { Link, useParams } from 'react-router-dom';
 
const Student = () => {
  const {username} = useParams();
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
        <li>
          <a href="#">
            <i className="icon">🔵</i> AzMP102
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

                {/* Main Content */}
                <div className="flex-1 p-4 ml-64">

                </div>
            </div>
      </>
    );
};

export default Student;


