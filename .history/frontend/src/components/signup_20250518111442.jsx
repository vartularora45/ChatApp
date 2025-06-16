import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const SignUp = () => {
  const [user, setuser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  // Function to handle form submission
  
  const handleSubmit = (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    setError("Passwords do not match!");
    return;
  }

 const userInfo = {
  username: username,
  email: email,
  password: password,
  confirmPassword: confirmPassword,

 }
 axios.post()

};


  return (
    <div>
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
          >
            <h1 className="text-4xl font-bold text-white text-center mb-6">
              <span className="text-3xl  font-bold text-cyan-400 ">
                ChatApp
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-white text-center mb-6 ">
              Sign Up
            </h2>

            {/* Username */}
            <div className="mb-4 relative group">
              <input
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all"
              />
              <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
            </div>

            {/* Email */}
            <div className="mb-4 relative group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all"
              />
              <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
            </div>

            {/* Password */}
            <div className="mb-4 relative group">
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}

                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all"
              />
              <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
            </div>

            {/* Confirm Password */}
            <div className="mb-6 relative group">
              <input
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all"
              />
              <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
            </div>

            <button
              
              type="submit"
              className="w-full text-xl font-bold py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
            >
              SignUp
            </button>
            <p className="p-4 text-white">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-400 hover:underline">
                Login here
              </a>
            </p>
            {error && (
              <p className="text-red-500 text-center mt-4">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
