import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userInfo = {
      email,
      password,
    };

    try {
      const res = await axios.get("http://localhost:3000/api/users/login", userInfo);

      if (res.data.success) {
        setSuccess("Login successful!");
        setError(null);
        console.log("Login successful:", res.data.user);
        // Store token/user (optional, if backend sends token)
        // localStorage.setItem("token", res.data.token);

        // Redirect to dashboard/home after 2 seconds
        // setTimeout(() => {
        //   navigate("/home");
        // }, 2000);
      } else {
        setError(res.data.message || "Invalid credentials.");
        setSuccess(null);
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Server error during login.");
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          <span className="text-3xl font-bold text-cyan-400">ChatApp</span>
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400"
          />
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

        {/* Feedback Messages */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
      </form>
    </div>
  );
};

export default Login;
