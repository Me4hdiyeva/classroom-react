import React, { useState } from 'react';

const Student = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
 
      <aside
        className={`w-64 bg-[#9553A0] fixed top-0 left-0 h-full transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="py-3 text-2xl uppercase text-center tracking-widest bg-[#9553A0] border-b-2 border-[#9553A0] mb-8">
          <a href="/" className="text-white">Brainy Bunch</a>
        </div>
        <nav style={{display:"flex", flexDirection:"column",gap:"20px"}} className="text-sm text-gray-300">
          <ul className="flex flex-col">
            <li style={{display:"flex", gap:"20px", flexDirection:"column"}} className="px-4 cursor-pointer text-gray-800  hover:text-white">
              <a style={{paddingTop:"20px", gap:"20px"}} className="py-3 flex items-center" href="/">
       Profil
              </a>
            
            </li>
      
          </ul>
          
          <ul className="flex flex-col">
            <li style={{display:"flex", gap:"20px", flexDirection:"column"}} className="px-4 cursor-pointer text-gray-800  hover:text-white">
              <a style={{paddingTop:"20px", gap:"20px"}} className="py-3 flex items-center" href="/">
About
              </a>
            
            </li>
      
          </ul>
          <ul className="flex flex-col">
            <li style={{display:"flex", gap:"20px", flexDirection:"column"}} className="px-4 cursor-pointer text-gray-800  hover:text-white">
              <a style={{paddingTop:"20px", gap:"20px"}} className="py-3 flex items-center" href="/">
 Assigneiments
              </a>
            
            </li>
      
          </ul>
          <ul className="flex flex-col">
            <li style={{display:"flex", gap:"20px", flexDirection:"column"}} className="px-4 cursor-pointer text-gray-800  hover:text-white">
              <a style={{paddingTop:"20px", gap:"20px"}} className="py-3 flex items-center" href="/">
Log 
              </a>
            
            </li>
      
          </ul>
        </nav>
      </aside>


      <div className="flex-1 p-4 ml-64">

        <button
          onClick={toggleSidebar}
          style={{top:"400px"}}
          className="fixed top-24 left-4 p-3 bg-[#9553A0] text-white rounded-full shadow-md hover:bg-[#7e3b7d] transition-colors duration-300"
        >
          {isSidebarOpen ? 'Bağla' : 'Aç'}
        </button>
      </div>
    </div>
  );
};

export default Student;
