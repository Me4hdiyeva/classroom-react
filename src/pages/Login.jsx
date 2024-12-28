import React from "react";
import { Link } from "react-router-dom";
import logo  from "../assets/img/Mathematicsamico.png"

function Login() {
  return (
    <div style={{display:"flex", gap:"20px", marginLeft:"180px"}}>
    <div style={{width:"600px" , height:"700px" , marginTop:"80px"}}>
      <img src={logo} alt="" />
    </div>
  
    <div style={{ width: "750px" }} className="flex h-screen items-center justify-center ">
      <div
        style={{ backgroundColor: "#9553A0", color: "white" }}
        className="w-full max-w-md m-auto rounded-lg shadow-lg p-8"
      >
        <header className="text-center mb-6">
          <img
            className="w-20 mx-auto mb-4"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            alt="Logo"
          />
        </header>
        <form>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full bg-white text-indigo-600 font-bold py-3 rounded-lg hover:bg-indigo-100 transition duration-200"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <footer className="text-center">
          <a
            className="text-white hover:text-indigo-100 text-sm mr-4"
            href="#"
          >
            Forgot Password?
          </a>
          <Link
            className="text-white hover:text-indigo-100 text-sm"
            to="/register"
          >
            Create Account
          </Link>
        </footer>
      </div>
    </div>
    
    
    </div>

  );
}

export default Login;
