import React from "react";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    const userInfo = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/api/users/login", userInfo)
      .then((res) => {
        if (res.data.success) {
          setSuccess("Login successful!");
          setError(null);
          // Redirect to home or dashboard
         
        } else {
          setError(res.data.message || "An error occurred during login.");
          setSuccess(null);
        }
      })
      .catch((err) => {
        setError(err.response.data.message || "An error occurred during login.");
        setSuccess(null);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-6">
            <span className="text-3xl  font-bold text-cyan-400 ">ChatApp</span>
          </h1>
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Login
          </h2>

          {/* Email */}
          <div className="mb-4 relative group">
            <input
              required

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all"
            />
            <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
          </div>

          {/* Password */}
          <div className="mb-6 relative group">
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

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
          >
            Login
          </button>
          <p className="text-center text-gray-400 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-cyan-400 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
