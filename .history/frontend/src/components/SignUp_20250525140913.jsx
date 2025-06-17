import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

axios.defaults.withCredentials = true;

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
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
          username: username.trim(),
          email: email.trim(),
          password,
          confirmPassword
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );

      console.log("Full response:", res);

      if (res.data.success || res.data.token || res.data.user) {
        setSuccess("Account created successfully! Redirecting...");
        
        // Store authentication data
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setUser(res.data.user);
        }

        // Redirect after short delay
        setTimeout(() => navigate("/"), 1500);
      } else {
        setError(res.data.message || "Signup failed - no success flag");
      }
    } catch (err) {
      console.error("Signup error:", err);
      
      if (err.response) {
        if (err.response.status === 400) {
          setError(err.response.data.message || "Validation error");
        } else if (err.response.data?.message) {
          setError(err.response.data.message);
        } else {
          setError(`Server error: ${err.response.status}`);
        }
      } else if (err.request) {
        setError("Network error - could not connect to server");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSignUp}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          <span className="text-3xl font-bold text-cyan-400">ChatApp</span>
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up</h2>

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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          className={`w-full py-3 text-white font-semibold rounded-lg transition-all flex items-center justify-center ${
            isLoading ? "bg-cyan-600" : "bg-cyan-500 hover:bg-cyan-600"
          }`}
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
              Creating account...
            </>
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login
          </a>
        </p>

        {/* Feedback Messages */}
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
  );
};

export default SignUp;