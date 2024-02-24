import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const LoginRegisterPopup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const {login}=useContext(AuthContext);
  const handleLogin=async (e)=>{
    e.preventDefault()
    try{
    const res=await login(inputs);
    navigate("/")
    }catch(err){
      if (err.response && err.response.data && err.response.data.message) {
        setErr(err.response.data.message);
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <div className="fixed inset-0 flex items-center justify-center">
          <img
            src="/assets/images/new.jpg"
            alt="Quiz"
            className="fixed inset-0 object-cover w-full h-full"
          />
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75"></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-blue-100 p-8 rounded shadow-md w-96">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">Login</h1>
              <div className="flex items-center justify-center">
                <div className="w-full h-full bg-[#86B6F6] flex items-center justify-center rounded-md">
                  <div className="flex flex-col gap-4">
                    <form className="flex flex-col gap-4 m-16">
                      <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        className="border-none border-b border-gray-300 p-2 rounded-md"
                        onChange={handleChange}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="border-none border-b border-gray-300 p-2 rounded-md"
                        onChange={handleChange}
                      />
                       {err && err}
                      <button
                        onClick={handleLogin}
                        className="bg-blue-400 text-white font-bold py-2 px-4 rounded-md"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <button
                onClick={togglePopup}
                className="mt-4 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LoginRegisterPopup;
