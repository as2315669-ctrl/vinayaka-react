// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ✅ Logo links to Home */}
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
        <div className="logo">✈ Vinayaka Tour & Travels</div>
        </Link>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link>
        <Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link>
        <Link to="/fleet" onClick={() => setIsOpen(false)}>Fleet</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}
