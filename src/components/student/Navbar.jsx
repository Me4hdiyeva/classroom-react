import React, { useState, useRef, useEffect } from "react";
// import Login from "./Login";
import logo from "../../assets/img/Svg"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      e.target.id !== "open-sidebar"
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Brainy Bunch</title>
      </Helmet>
      <div  className="bg-gray-100 ">
        <div  className=" flex overflow-hidden bg-gray-200">
          
          {/* <div
            ref={sidebarRef}
            className={`top-[55px] absolute bg-[#9553A0] text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } ease-in-out duration-300`}
            id="sidebar"
          >
         
            <div className="mt-10 p-4 ">
              <ul style={{display:"flex", flexDirection:"column", gap:"20px"}}  className="mt-4">
                <li className="mb-2">
                  <Link to="/" className="block hover:text-indigo-400  hover:text-[#515B60]">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="block hover:text-indigo-400 hover:text-[#515B60]">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/services" className="block hover:text-indigo-400 hover:text-[#515B60]">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="block hover:text-indigo-400 hover:text-[#515B60]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}

          {/* Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <div className="bg-white shadow bg-[#9553A0]">
              <div className="container mx-auto">
                <div  style={{backgroundColor:"#9553A0"}} className="flex justify-between items-center py-4 px-2 ">
                  <h1 className="text-xl font-semibold  text-[#F5F5F5] ">Brainy Bunch Class</h1>
                  <button
                    className="text-gray-500 hover:text-gray-600"
                    id="open-sidebar"
                    onClick={toggleSidebar}
                  >
                    {/* <svg
                      className="w-6 h-6  "
                      fill="#F5F5F5"
                      stroke="#F5F5F5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg> */}
                  </button>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

    </>
  );
}




export default Navbar;
