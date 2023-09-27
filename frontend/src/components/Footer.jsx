import React from "react";
import "./Footer.css"; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Clouds-wiki</h2>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/categories">Categories</a>
          <a href="/about">About</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Clouds-wiki. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
