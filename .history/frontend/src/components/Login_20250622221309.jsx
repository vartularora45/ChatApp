import React, { useState } from "react";
import axios from 'axios';
import API from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const res = await API.post(
  "/api/users/login",
  { email, password },
  {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true, // 👈 ye zaroori hai bhai!
  }
);


      if (res.data.user) {
        setSuccess("Login successful! Redirecting...");
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        setError("Login failed - no user info");
      }
    } catch (err) {
      console.error("Login error:", err);

      if (err.response) {
        if (err.response.status === 401) {
          setError("Invalid email or password");
        } else {
          setError(err.response.data.message || "Server error");
        }
      } else {
        setError("Network or unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          <span className="text-3xl font-bold text-cyan-400">ChatApp</span>
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 bg-gray-900 text-white border-2 border-gray-600 rounded-lg"
          disabled={isLoading}
          autoComplete="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 bg-gray-900 text-white border-2 border-gray-600 rounded-lg"
          disabled={isLoading}
          autoComplete="current-password"
        />
        <button
          type="submit"
          className={`w-full py-3 text-white font-semibold rounded-lg ${
            isLoading ? "bg-cyan-600" : "bg-cyan-500 hover:bg-cyan-600"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </a>
        </p>
        {error && <div className="mt-4 text-red-400 text-center">{error}</div>}
        {success && <div className="mt-4 text-green-400 text-center">{success}</div>}
      </form>
    </div>
  );
};

export default Login;
