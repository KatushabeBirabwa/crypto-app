import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import CryptoDashboard from "./components/CryptoDashboard"; // Dashboard component
import Header from "./components/Header";
import Home from "./components/Home"; // Assuming Home component is your landing page
import Login from "./components/Login"; // Login component
import Signup from "./components/Signup"; // Signup component
import { auth } from "./firebase/firebaseConfig"; // Firebase configuration

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Set authentication state based on user status
    });
  }, []);

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <CryptoDashboard /> : <Login />} // Redirect to login if not authenticated
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
