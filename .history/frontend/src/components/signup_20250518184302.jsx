import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"; // This import is not used in the provided code, can be removed if not needed elsewhere.
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = () => {
  const [user, setuser] = useState(null); // This state is not used, can be removed.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const userInfo = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    axios
      .post("http://localhost:3000/api/users/signup", userInfo)
      .then((res) => {
        if (res.data.success) {
          setSuccess("User created successfully!");
          setError(""); // Ensure error is cleared on success
          console.log("User created successfully:", res.data.user);
          // Navigate to home page after a short delay to show success message
          setTimeout(() => {
            navigate("/home");
          }, 1500); // Navigate after 1.5 seconds
        } else {
          setError(res.data.message || "Failed to create user.");
          setSuccess(""); // Ensure success is cleared on error
        }
      })
      .catch((err) => {
        console.error(err);
        // Handle different types of errors (e.g., network error, server error response)
        if (err.response && err.response.data && err.response.data.message) {
             setError(err.response.data.message); // Use server's error message if available
        } else {
             setError("An error occurred while signing up. Please try again.");
        }
        setSuccess(""); // Ensure success is cleared on error
      });
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
              <span className="text-3xl font-bold text-cyan-400 ">ChatApp</span>
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
            {success && (
              <p className="text-green-500 text-center mt-4">{success}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
