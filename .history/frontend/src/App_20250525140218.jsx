const App = () => {
  const { user } = useAuth();
  
  console.log("Current user in App:", user); // यह देखने के लिए कि user स्टेट अपडेट हो रहा है या नहीं

  return (
    <Router>
      <Routes>
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
        
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" replace /> : <SignUp />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
};

e