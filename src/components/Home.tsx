// src/components/Home.tsx

import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Crypto Tracker</h1>
      <p>Track real-time cryptocurrency prices.</p>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Home;
