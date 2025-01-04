import { useFormik } from "formik";
import React from "react";
import { Helmet } from "react-helmet-async";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { UploadStream } from "cloudinary";
import axios from 'axios';
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";






function Register() {
  const navigate = useNavigate()

// const handleUpload = async(e)=> {
//  const data = new FormData()
//   const file = e.target.files[0]
//   if (!file) return;
//   console.log(file);
//   data.append("file", file[0])
//   data.append("uploud_preset", "classrom")
//   data.append("cloud_name", "dvt51fydi")

//   await axios.post("https://api.cloudinary.com/v1_1/dvt51fydi/image/upload", data )
// };



  const formYup = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
     .min(8, 'Too Short!')
     .required('Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),



  });

  const formik = useFormik({
    initialValues: {
      username: '',
      fullName: '',
      email: '',
      role: 'teacher',
      profileImage: '',
      password: '',
      major: '',
      bio: '',
      socialLinks: '',
      confirmPassword: '', 
    },
    // onSubmit: handleSubmit,
    validationSchema: formYup,
    onSubmit: async (values) => {
      console.log(values);
      
      try {
        const response = await axios.post('https://full-translucent-cut.glitch.me/users', values);     
        console.log('Success:', response.data);
        console.log("kecdi");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have registered!",
          showConfirmButton: false,
          timer: 1500
        });
       navigate("/all")

        
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    }
  });

  // console.log("formik values", formik.values);
  
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="bg-white flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 style={{ color: "#9553A0" }} className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                FullName
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Enter your Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Enter your username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-red-500 text-sm">{formik.errors.username}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                 {formik.errors.password && formik.touched.password && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}
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
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
              )}
              
            </div>

            <div className="mb-4 flex gap-3">
              <label htmlFor="role" className="block text-gray-700 font-semibold">
                Student?
              </label>
              <input
                type="checkbox"
                id="role"
                name="role"
                className="border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
                checked={formik.values.role === 'student'}
                onChange={(event) => {
                  const isChecked = event.target.checked; 
                  formik.setFieldValue('role', isChecked ? 'student' : 'teacher'); 
                }}
                value={formik.values.role}
                onBlur={formik.handleBlur}
              />
              {formik.errors.role && formik.touched.role && (
                <div className="text-red-500 text-sm">{formik.errors.role}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="pImage" className="block text-gray-700 font-semibold mb-2">
                Profile image
              </label>
              <input
                type="file"
                id="pImage"
                name="pImage"
                // onClick={handleUpload}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9553A0]"
              />
                {formik.errors.pImage && formik.touched.pImage && (
                <div className="text-red-500 text-sm">{formik.errors.pImage}</div>
              )}
            </div>

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
