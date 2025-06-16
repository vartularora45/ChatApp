import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth(); // Assuming useAuth is imported from context
 const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login", 
        { email, password },
        {
          headers: {
            "Content-Type": "application/json"
          },
          // withCredentials: true // Uncomment if using cookies
        }
      );

      console.log("Full response:", res); // Debugging

      // Handle different success response formats
      if (res.data.success || res.data.token || res.data.user) {
        setSuccess("Login successful! Redirecting...");
        
        // Store authentication data
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        if (res.data.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }

        
      } else {
        setError(res.data.message || "Login failed - no success flag");
      }
    } catch (err) {
      console.error("Login error:", err);
      
      // Detailed error handling
      if (err.response) {
        // Server responded with error status
        if (err.response.status === 401) {
          setError("Invalid email or password");
        } else if (err.response.data?.message) {
          setError(err.response.data.message);
        } else {
          setError(`Server error: ${err.response.status}`);
        }
      } else if (err.request) {
        // Request was made but no response
        setError("Network error - could not connect to server");
      } else {
        // Other errors
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
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
        <div className="mb-6 relative group">
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
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-cyan-400 hover:underline">
            Sign Up
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

export default Login;