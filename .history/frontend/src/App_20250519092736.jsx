import React from 'react';
import Left from './home/leftpart/Left.jsx';
import Right from './home/rightpart/Right.jsx';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider.jsx';

const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Root path redirects to /signup by default */}
      <Route path="/" element={<Navigate to="/signup" replace />} />

      {/* Signup - only accessible if NOT logged in */}
      <Route
        path="/signup"
        element={user ? <Navigate to="/home" replace /> : <SignUp />}
      />

      {/* Login - only accessible if NOT logged in */}
      <Route
        path="/login"
        element={user ? <Navigate to="/home" replace /> : <Login />}
      />

      {/* Home - only accessible if logged in */}
      <Route
        path="/home"
        element={
          user ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to="/signup" replace />
          )
        }
      />

      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/signup" replace />} />
    </Routes>
  );
};

export default App;