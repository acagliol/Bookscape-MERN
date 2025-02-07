import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../utils/baseURL.js";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const auth = response.data;

      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          setMessage("Token has expired! Please login again.");
          navigate("/");
        }, 3600 * 1000);
      }
      setSuccess(true);
      setMessage("Admin Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      setSuccess(false);
      if (error.response && error.response.status === 401) {
        setMessage("Invalid username or password. Please try again.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF8E1] text-[#9B1C1C]">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-9">
        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaShieldAlt className="mr-2" /> Admin Dashboard Login
        </h2>

        {message && (
          <div className={`mb-4 text-center p-2 rounded-md ${success ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-[#9B1C1C] text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#B85C38]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#9B1C1C] text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#B85C38]"
            />
          </div>

          <button className="w-full bg-[#9B1C1C] text-white font-bold py-2 px-4 rounded-md hover:bg-[#B85C38] focus:outline-none">
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-gray-500 text-xs">©2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AdminLogin;
