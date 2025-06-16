import React from 'react';
import Left from './home/leftpart/Left.jsx';
import Right from './home/rightpart/Right.jsx';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider.jsx';

const App = () => {
  const { user ,setUser } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/signup"
          element={user ? <Navigate to="/" replace /> : <SignUp />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        
      </Routes>
    </Router>
  );
};

export default App;
