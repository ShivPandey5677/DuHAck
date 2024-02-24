import React from 'react'

const SignUp = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const togglePopup = () => {
          setIsOpen(!isOpen);
        };
      
        return (
          <div>
            <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Open Popup
            </button>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white p-8 rounded shadow-md w-96">
                  <h2 className="text-xl font-bold mb-4">Login/Register</h2>
                  {/* Your login/register form goes here */}
                  <button onClick={togglePopup} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        );

};

export default SignUp
