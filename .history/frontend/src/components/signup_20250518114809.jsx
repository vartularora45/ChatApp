import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccessMsg("");
      return;
    }

    try {
      const userInfo = {
        username,
        email,
        password,
        confirmPassword,
      };

      const response = await axios.post("http://localhost:3000/api/users/signup", userInfo);

      if (response.data.success) {
        setError(null);
        setSuccessMsg("Signup successful! Redirecting...");
        
        // Optional: Reset form
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Redirect after 2 seconds
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        setError(response.data.message || "Signup failed.");
        setSuccessMsg("");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Server error during signup.");
      setSuccessMsg("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          <span className="text-3xl font-bold text-cyan-400">ChatApp</span>
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up</h2>

        {/* Username */}
        <div className="mb-4">
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400"
          />
        </div>

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
        <div className="mb-4">
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <input
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          className="w-full text-xl font-bold py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all"
        >
          Sign Up
        </button>

        <p className="p-4 text-white">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login here
          </a>
        </p>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {successMsg && <p className="text-green-500 text-center mt-4">{successMsg}</p>}
      </form>
    </div>
  );
};

export default SignUp;
