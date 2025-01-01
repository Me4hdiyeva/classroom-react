import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Mathematicsamico.png";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  const formYup = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: formYup,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "https://full-translucent-cut.glitch.me/users",
          values
        );
        
        // Serverin cavabını konsola yazdıraq
        console.log("Serverin cavabı:", response.data);  
    
        // Server cavabında `success` sahəsi yoxdursa, bəlkə başqa sahə var
        if (response.data && response.data.status === "success") {
          console.log("Giriş müvəffəqiyyətli oldu");
        } else {
          console.log("Giriş uğursuz oldu.");
        }
      } catch (error) {
        // Hata ilə bağlı daha detallı məlumat
        if (error.response) {
          console.error("Server Error:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    }
    
    
  });

  return (
    <>
      <Helmet>
        <title>Brainy Bunch</title>
      </Helmet>
      <div style={{ display: "flex", gap: "20px", marginLeft: "180px" }}>
        <div style={{ width: "600px", height: "700px", marginTop: "80px" }}>
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
            <form onSubmit={formik.handleSubmit} noValidate>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="fullName"
                >
                  Fullname
                </label>
                <input
                  className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Fullname"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
                )}
              </div>
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
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                {formik.errors.username && formik.touched.username && (
                  <div className="text-red-500 text-sm">{formik.errors.username}</div>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                )}
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
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                )}
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
    </>
  );
}

export default Login;
