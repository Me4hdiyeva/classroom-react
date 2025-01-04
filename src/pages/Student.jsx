import React from 'react';
import { Link } from 'react-router-dom';
import Mainpages from './Mainpages';

const Student = () => {
    return (
        <>
            <div className="flex main">
                {/* Sidebar */}
                {/* <aside
                    className="w-64 bg-[#9553A0] fixed top-0 left-0 h-full transform transition-all duration-300 ease-in-out"
                >
                    <div className="py-3 text-2xl uppercase text-center tracking-widest bg-[#9553A0] border-b-2 border-[#9553A0] mb-8">
                        <a href="/" className="text-white">Brainy Bunch</a>
                    </div>
                    <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="text-sm text-gray-300">
                        <ul className="flex flex-col">
                            <li style={{ display: "flex", gap: "20px", flexDirection: "column" }} className="px-4 cursor-pointer text-gray-800 hover:text-white">
                                <Link to="/mainpages" style={{ paddingTop: "20px", gap: "20px" }} className="py-3 flex items-center">
                                    Əsas səhifə
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col">
                            <li style={{ display: "flex", gap: "20px", flexDirection: "column" }} className="px-4 cursor-pointer text-gray-800 hover:text-white">
                                <a style={{ paddingTop: "20px", gap: "20px" }} className="py-3 flex items-center" href="/">
                                    About
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col">
                            <li style={{ display: "flex", gap: "20px", flexDirection: "column" }} className="px-4 cursor-pointer text-gray-800 hover:text-white">
                                <a style={{ paddingTop: "20px", gap: "20px" }} className="py-3 flex items-center" href="/">
                                    Assignments
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col">
                            <li style={{ display: "flex", gap: "20px", flexDirection: "column" }} className="px-4 cursor-pointer text-gray-800 hover:text-white">
                                <a style={{ paddingTop: "20px", gap: "20px" }} className="py-3 flex items-center" href="/">
                                    Log
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside> */}
                   <aside style={{position:"absolute"}} className="sidebar">
      <ul>
        <li>
          <Link to="/students" className="active">
            <i className="icon">🏠</i> Главная страница
          </Link>
        </li>
        <li>
          <Link to="calendar">
            <i className="icon">📅</i> Календарь
          </Link>
        </li>
        <li>
          <a href="">
            <i className="icon">📘</i> Курсы, слушателем которых...
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon">📋</i> Список заданий
          </a>
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


