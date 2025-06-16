import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setIsLoading(true);

    const userInfo = {
      username: username.trim(),
      email: email.trim(),
      password,
      confirmPassword,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/signup",
        userInfo,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Signup Response:", res);

      if (res.data?.success || res.data?._id || res.data?.status === "success") {
        setSuccess("User created successfully! Redirecting...");

        // Clear form
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Save and redirect
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);

        setTimeout(() => navigate("/"), 1500);
      } else {
        throw new Error("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      if (err.response?.data?.errors) {
        const errorMessages = Object.values(err.response.data.errors)
          .map((e) => e.message)
          .join(". ");
        setError(errorMessages);
      } else {
        setError(err.response?.data?.message || "Something went wrong. Please try again.");
      }
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
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          <span className="text-3xl text-cyan-400">ChatApp</span>
        </h1>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up</h2>

        {/* Username */}
        <InputField
          type="text"
          value={username}
          onChange={setUsername}
          placeholder="Username"
          disabled={isLoading}
        />

        {/* Email */}
        <InputField
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Email"
          disabled={isLoading}
        />

        {/* Password */}
        <InputField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Password"
          disabled={isLoading}
        />

        {/* Confirm Password */}
        <InputField
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Confirm Password"
          disabled={isLoading}
        />

        <button
          type="submit"
          className="w-full text-xl font-bold py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all flex justify-center items-center"
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
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login here
          </Link>
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
  );
};

const InputField = ({ type, value, onChange, placeholder, disabled }) => (
  <div className="mb-4 relative group">
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all"
      disabled={disabled}
    />
    <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
  </div>
);

export default SignUp;
