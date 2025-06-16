import React from "react";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div>
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm"
          >
            <h1>
                <span className="text-4xl absolute to-5% font-bold text-cyan-400 mb-6">ChatApp</span>
            </h1>
            <h2 className="text-2xl font-bold text-white text-center mb-6 ml-6">
              Sign Up
            </h2>

            {/* Username */}
            <div className="mb-4 relative group">
              <input
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
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-gray-900 text-white border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-all"
              />
              <span className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-0 group-focus-within:w-full transition-all duration-300"></span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
            >
              Register
            </button>
             <p className="p-4 text-white">
                Already have an account?{" "}
                <a href="/login" className="text-cyan-400 hover:underline">
                    Login here
                </a>
            </p>
          </form>
          
        </div>
       
      </div>
    </div>
  );
};

export default SignUp;
