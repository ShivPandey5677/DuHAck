import React, { useState } from 'react';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });

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
                    type="text"
                    placeholder="Username"
                    name="username"
                    // onChange={handleChange}
                    className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    // onChange={handleChange}
                    className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    // onChange={handleChange}
                    className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    // onChange={handleChange}
                    className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                  />
                  <button
                    // onClick={handleClick}
                    className="w-1/2 p-2 border-none bg-[#176B87] text-white font-bold cursor-pointer rounded-md"
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

export default SignUp;
