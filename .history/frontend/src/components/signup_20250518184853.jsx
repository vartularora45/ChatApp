import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Auto-dismiss error messages after 3 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        if (error) setError("");
        if (success) setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);
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
          setSuccess("User created successfully! Redirecting...");
          setTimeout(() => {
            navigate("/home");
          }, 1500);
        } else {
          setError(res.data.message || "Failed to create user.");
        }
      })
      .catch((err) => {
        console.error(err);
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError("An error occurred while signing up. Please try again.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-6">
            <span className="text-3xl font-bold text-cyan-400">ChatApp</span>
          </h1>
          <h2 className="text-2xl font-bold text-white text-center mb-6">
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
            <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
          </div>

          <button
            type="submit"
            className="w-full text-xl font-bold py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
          
          <p className="p-4 text-white text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-cyan-400 hover:underline"
            >
              Login here
            </a>
          </p>
          
          {error && (
            <div className="mt-4 p-3 bg-red-500/20 text-red-500 text-center rounded-lg animate-fade-in">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mt-4 p-3 bg-green-500/20 text-green-500 text-center rounded-lg animate-fade-in">
              {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;