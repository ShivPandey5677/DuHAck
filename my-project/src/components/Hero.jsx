import React from 'react';
import { motion } from 'framer-motion';


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
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Depression Diagnostic Centre
          </motion.h1>
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-xl mb-8"
          >
            We Find We Solve
          </motion.p>
          
          <button className="font-sans text-lg uppercase text-white cursor-pointer border-3 border-blue-500 p-2 px-4 relative select-none shadow-1 shadow-2 shadow-3 shadow-4 shadow-5 transition-transform duration-200 ease-in-out transform hover:translate-x-1 hover:translate-y-1 bg-blue-500 skew-x-12">
            Take A Quiz
          </button>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
