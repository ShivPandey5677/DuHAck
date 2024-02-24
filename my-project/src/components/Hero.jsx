import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-center h-full">
        <motion.div
          initial={{ x: '100vw', scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 1.5 }}
          className="flex-none mr-8"
        >
          <img src="/assets/images/new.jpg" alt="Quiz" className="rounded-lg mb-8 mr-8" style={{ maxWidth: '700px' }} /> {/* Increased maxWidth for larger image */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, type: 'spring', stiffness: 80 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl font-bold mb-4 ">
            <span className = "gradient-text">
            <TypeAnimation
              sequence={['Depression', 1000,'Anxiety',1000, 'Trauma',1000,'Mind-State',1000]}
              wrapper = "span" // Loop the animation
              typingSpeed={10000} // Adjust the typing speed
              repeat = {Infinity}
            />
            </span>
            Diagnostic Centre
          </h1>
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-xl mb-8"
          >
            We Find We Solve
          </motion.p>
          <Link to="/quiz">
          <button className="font-sans text-lg rounded-md uppercase text-white cursor-pointer border-3 border-blue-500 p-2 px-4 relative select-none shadow-1 shadow-2 shadow-3 shadow-4 shadow-5 transition-transform duration-200 ease-in-out transform hover:translate-x-1 hover:translate-y-1 bg-blue-500 skew-x-12">
            Take A Quiz
          </button>
          </Link>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;