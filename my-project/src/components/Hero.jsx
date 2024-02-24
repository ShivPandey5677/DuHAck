import React from 'react';
import { motion } from 'framer-motion';

const LinkWithPreview = ({ href, title, description }) => {
  return (
    <div className="relative m-2">
      <a href={href} className="text-blue-500 hover:text-blue-700 font-bold">{title}</a>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute bg-white shadow-md p-4 rounded-lg top-full left-1/2 -translate-x-1/2 mt-2 w-64 text-gray-800" // Adjusted text color to gray
      >
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </motion.div>
    </div>
  );
};

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
          <div className="flex flex-col m-4"> {/* Added margin-top for spacing between text and links */}
            <LinkWithPreview href="#" title="Link 1" description="Preview for link 1" />
            <LinkWithPreview href="#" title="Link 2" description="Preview for link 2" />
            {/* Add more LinkWithPreview components as needed */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
