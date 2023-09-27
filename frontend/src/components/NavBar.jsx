import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Categories">Categories</Link>
        <Link to="/About">About</Link>
      </nav>
      <div>
        <h1>Clouds-wiki</h1>
      </div>
    </header>
  );
}

export default Navbar;
