

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineLogin, AiOutlineUser, AiOutlineUserAdd, AiOutlineUserSwitch, AiOutlineMail } from 'react-icons/ai';
import { AuthContext } from '../context/authContext';
import logo from "../components/logo.svg";
// 
const NavBarL = () => {
    const {currentUser}=useContext(AuthContext);
    return (
      <nav className="flex flex-row items-center justify-between bg-slate-900 text-white py-4 px-6">
        <div  className="logo-container">
        <img src={logo} alt="" />
      </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold"></span>
        </div>
        <div className="hidden lg:flex md:flex lg:flex-1 items-center justify-end font-normal space-x-6">
          <Link to="/" spy={true} smooth={true} className="hover:bg-slate-800 hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={20} /> Home
          </Link>
          <Link to="/About" spy={true} smooth={true} className="hover:bg-slate-800 hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineInfoCircle size={20}/> About
          </Link>
          <Link to="/psychiatrist" spy={true} smooth={true} className="hover:bg-slate-800 hover:rounded py-2 px-4 hover:scale-110 ease-in duration-200">
            <AiOutlineUserSwitch size={20}/> Psychiatrist
          </Link>
          <Link to={`/profile/${currentUser.id}`} spy={true} smooth={true} className="hover:bg-teal-800 hover:text-white-500 hover:rounded flex transition py-2 px-4 hover:scale-110 ease-in duration-200">
                  <p className="body-bold text-white text-center">{currentUser.name}</p>
              </Link>
        </div>
        <div className="lg:hidden block bg-slate-900 text-white py-4 px-6 ">
          <ul className="flex text-center text-xl space-x-6">
           
          </ul>
        </div>
      </nav>
    );
  };
  
  export default NavBarL;