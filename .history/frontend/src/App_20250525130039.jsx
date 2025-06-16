import React from 'react';
import Left from './home/leftpart/Left.jsx';
import Right from './home/rightpart/Right.jsx';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider.jsx';

const App = () => {
  const { user } = useAuth(); // Removed setUser as it's not used here

  return (
    <Router>
      <Routes>
        {/* Main app route - protected */}
        <Route
          path="/"
          element={
            user ? (
              <div className="flex h-screen">
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        
        {/* Auth routes - only accessible when not logged in */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" replace /> : <SignUp />}
        />
        <Route
        path='/profile'
         />
        {/* Catch-all redirect */}
        
      </Routes>
    </Router>
  );
};

export default App;