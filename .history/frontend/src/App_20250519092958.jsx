import React from 'react';
import Left from './home/leftpart/Left.jsx';
import Right from './home/rightpart/Right.jsx';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider.jsx';

const App = () => {
  const { user } = useAuth();

  return (
   
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
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
        <Route
          path="/signup"
          element={user ? <Navigate to="/home" replace /> : <SignUp />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/home" replace /> : <Login />}
        />
      </Routes>
   
  );
};

export default App;
