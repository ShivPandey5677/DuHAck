import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const RegPsych = () => {
    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        contact:'',
        expertise:'',
        fid:0,
      });
      const [err, setErr] = useState(null);
      const navigate = useNavigate();
      const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prev => ({
          ...prev,
          [name]: value
        }));
      }
     const handleClick=async e=>{
      e.preventDefault();
    
      try{
        
        await axios.post("http://localhost:8800/api/psych/registerpsych",inputs)
      }catch(err){
        setErr(err.response.data);
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
              <h1 className="text-2xl font-semibold text-[#176B87] mb-4">SignUp</h1>
              <div className="flex items-center justify-center">
    
                <div className="z-10 relative w-full h-full bg-[#86B6F6] flex items-center justify-center rounded-md">
                  <div className="flex flex-col gap-4">
                    <form className="flex flex-col gap-4 m-3">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                      />
                     
                      <input type="text" 
                      placeholder="Contact Number with country code"
                      name="contact"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                      />
                     <input type="text" 
                      placeholder="Expertise"
                      name="expertise"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                      />
                    
                     <div>
          <input
        type="radio"
        id="depression"
        name="fid"
        value={1}
        onChange={handleChange}
        className="border-none border-b-2 border-blue-100 p-2 rounded-md mr-2"
      />
      <label htmlFor="depression">Depression</label>
    
      <input
        type="radio"
        id="anxiety"
        name="fid"
        value={2}
        onChange={handleChange}
        className="border-none border-b-2 border-blue-100 p-2 rounded-md mr-2"
      />
      <label htmlFor="anxiety">Anxiety</label>
    
      <input
        type="radio"
        id="stress"
        name="fid"
        value={3}
        onChange={handleChange}
        className="border-none border-b-2 border-blue-100 p-2 rounded-md mr-2"
      />
      <label htmlFor="stress">Stress</label>
    
      <input
        type="radio"
        id="trauma"
        name="fid"
        value={4}
        onChange={handleChange}
        className="border-none border-b-2 border-blue-100 p-2 rounded-md mr-2"
      />
      <label htmlFor="trauma">Trauma</label>
    
    </div>
                       {err && err}
                      <button
                        onClick={handleClick}
                        className="w-1/2 p-2 border-none bg-[#176B87] text-white font-bold cursor-pointer rounded-md mr-2"
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <button onClick={togglePopup} className="mt-4 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Close
              </button>
            </div>
            </div>
            
          </div>
        </div>
      );
    };

export default RegPsych
