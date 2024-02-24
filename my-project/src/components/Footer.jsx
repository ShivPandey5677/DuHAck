import React from 'react';
import logo from "../components/logo.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-500 bg-opacity-50">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="logo-container2">
          <img src={logo} alt="" />
        </div>
        <div className="flex space-x-4">
          <Link to="/home" className="font-bold">Home</Link>
          <Link to="/about" className="font-bold">About</Link>
          <Link to="/profile" className="font-bold">Profile</Link>
          <Link to="/psychiatrist" className="font-bold">Psychiatrist</Link>
          <Link to="/contact" className="font-bold">Contact</Link>
          <Link to="/signup" className="font-bold">SignUp</Link>
          <Link to="/login" className="font-bold">LogIn</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
