import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseURL from "../utils/baseURL";

const Login = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${getBaseURL()}/api/auth/admin`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Session expired, please login again.");
          navigate("/");
        }, 3600 * 1000);
      }
      alert("Admin Login successful");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FFF8E1]">
      <div className="w-full max-w-sm mx-auto bg-[#FDFCEB] shadow-md rounded-lg px-8 pt-6 pb-9">
        <h2 className="text-2xl font-semibold text-[#9B1C1C] mb-4 text-center">Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-[#9B1C1C] text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              id="username"
              placeholder="Enter username"
              className="shadow appearance-none border border-[#9B1C1C] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">Username is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-[#9B1C1C] text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="Enter password"
              className="shadow appearance-none border border-[#9B1C1C] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-1 focus:ring-[#9B1C1C]"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>

          {message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}

          <div>
            <button
              className="bg-[#9B1C1C] w-full hover:bg-[#7A1515] text-white font-bold py-2 rounded focus:outline-none transition"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-[#9B1C1C] text-xs">©2025 Book Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
