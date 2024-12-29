import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/student/Navbar";

function Register() {



  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div
        className=" bg-white flex items-center justify-center min-h-screen"

      >
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 style={{ color: "#9553A0" }} className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form noValidate>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-4 flex gap-3">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold m">
                Student?
              </label>
              <input
                type="checkbox"
                id="checkbox-true"
                className=" border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                Profile image
              </label>
              <input
                type="file"
                id="p-image"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
              
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                Bio
              </label>
              <input
                type="text"
                id="p-image"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Add bio"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-[#9553A0] text-white py-2 rounded-lg font-semibold hover:bg-[#7c3f87] focus:outline-none focus:ring-2 focus:ring-[#9553A0] focus:ring-opacity-50"
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-[#9553A0] font-semibold">Sign In</a>
          </p>
        </div>
      </div>


    </>
  );
}




export default Register;





