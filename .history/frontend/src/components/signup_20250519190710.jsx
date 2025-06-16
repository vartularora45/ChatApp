// src/pages/Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuth();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token, user } = res.data;

      if (token && user) {
        setSuccess("Signup successful! Redirecting...");
        
        navigate("/dashboard"); // Change to your desired route
      } else {
        setError("Signup failed: invalid response");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Sign Up
        </h2>

        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-4 py-3 bg-gray-900 text-white border border-gray-600 rounded-lg"
        />
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 bg-gray-900 text-white border border-gray-600 rounded-lg"
        />
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-3 bg-gray-900 text-white border border-gray-600 rounded-lg"
        />
        <input
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 px-4 py-3 bg-gray-900 text-white border border-gray-600 rounded-lg"
        />

        <button
          type="submit"
          className={`w-full py-3 font-semibold rounded-lg ${
            isLoading ? "bg-cyan-600" : "bg-cyan-500 hover:bg-cyan-600"
          } text-white`}
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-500 mt-4 text-center">{success}</p>
        )}
      </form>
    </div>
  );
};

export default Signup;
