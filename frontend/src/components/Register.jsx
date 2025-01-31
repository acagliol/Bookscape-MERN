// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";

// const Register = () => {
//     const [message, setMessage] = useState("");
//     const {registerUser, signInWithGoogle} = useAuth(); 

//     console.log(registerUser)
//     const {
//       register,
//       handleSubmit,
//       watch,
//       formState: { errors },
//     } = useForm();
  
//     //register user 
//     const onSubmit = async(data) => {
//       // console.log(data) 
//       try {
//         await registerUser(data.email, data.password);
//         alert("User register successfully")
//       } catch (error) {
//         setMessage("Please provide a valid email and password")
//       }
//     }
//     // test here alejo

  
//     const handleGoogleSignIn = async() => {
//       try {
//         await signInWithGoogle();
//         alert("Login successful")
//         navigate("/")
//       } catch (error) {
//         setMessage("Google sign in failed")
//         console.log(error)
//       }
//     }
  
//   return (
//     <div className="h-[calc(100vh-120px)] flex justify-center items-center">
//       <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-9 mb-4">
//         <h2 className="text-xl font-semibold mb-4">Please Register</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>

//             <input
//               {...register("email", { required: true })}
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Email Address"
//               className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>

//             <input
//               {...register("password", { required: true })}
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
//             />
//           </div>
//           {message && (
//             <p className="text-red-500 text-xs italic mb-3">{message}</p>
//           )}

//           <div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 rounded focus:outline-none">
//               Register
//             </button>
//           </div>
//         </form>

//         <p className="align-baseline font-meduim mt-4 text-sm">
//           Have an account? Please
//           <Link to="/login" className="text-blue-500 hover:text-blue-700">
//             {" "}
//             Login
//           </Link>
//         </p>

//         {/* google sign in */}
//         <div className="mt-4">
//           <button 
//           onClick={handleGoogleSignIn}
//           className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
//             <FaGoogle className="mr-2" />
//             Sign in with Google
//           </button>
//         </div>
//         <p className="mt-5 text-center text-gray-500 text-xs">
//           ©2025 Book Store. All rights reserved.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Register

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
    const [message, setMessage] = useState("");
    const { registerUser, signInWithGoogle } = useAuth(); 

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async(data) => {
      try {
        await registerUser(data.email, data.password);
        alert("User registered successfully");
      } catch (error) {
        setMessage("Please provide a valid email and password");
      }
    };
  
    const handleGoogleSignIn = async() => {
      try {
        await signInWithGoogle();
        alert("Login successful");
      } catch (error) {
        setMessage("Google sign-in failed");
      }
    };
  
    return (
      <div className="h-screen flex justify-center items-center bg-[#FFF8E1] text-[#9B1C1C]">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-9">
          <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-[#9B1C1C] text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                placeholder="Enter your email"
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
            {message && <p className="text-red-500 text-sm italic mb-3">{message}</p>}
  
            <button className="w-full bg-[#9B1C1C] text-white font-bold py-2 px-4 rounded-md hover:bg-[#B85C38] focus:outline-none">
              Register
            </button>
          </form>
  
          <p className="text-sm text-center mt-4">
            Already have an account? 
            <Link to="/login" className="text-[#B85C38] hover:underline"> Login</Link>
          </p>
  
          <div className="mt-4">
            <button 
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center bg-[#B85C38] hover:bg-[#9B1C1C] text-white font-bold py-2 px-4 rounded-md focus:outline-none">
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
          <p className="mt-5 text-center text-gray-500 text-xs">
            ©2025 Book Store. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default Register;
