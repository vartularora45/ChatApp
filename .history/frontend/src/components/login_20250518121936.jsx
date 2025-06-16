import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // POST request instead of GET
      const res = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });

      if (res.data.success) {
        setSuccess("Login successful!");
        setError(null);
        console.log("Login successful:", res.data.user);

        // Optional: store token/user
        localStorage.setItem("token", res.data.token);

        // Navigate after short delay
        setTimeout(() => {
          navigate("/home");
        }, 1500);
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
          <span className="text-cyan-400">ChatApp</span>
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
        >
          Login
        </button>

        {/* Link */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </Link>
        </p>

        {/* Feedback Messages */}
        {error && (
  <div className="mt-4 text-center px-4 py-2 bg-red-600 text-white rounded-lg shadow-md animate-bounce">
    🚫 {error}
  </div>
)}
{success && (
  <div className="mt-4 text-center px-4 py-2 bg-green-500 text-white rounded-lg shadow-md animate-pulse">
    ✅ {success}
  </div>
)}

      </form>
    </div>
  );
};

export default Login;
