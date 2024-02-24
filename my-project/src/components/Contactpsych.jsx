import React, { useEffect, useState } from 'react'
import { motion,useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";
import { Link } from 'react-router-dom';
const Contactpsych = () => {
    const boxVariant = {
        visible: { x: 0, scale: 1 },
        hidden:{ x: '100vw', scale: 0.5 }
      };
      const [ref, inView] = useInView() 
      const controls = useAnimation()

      useEffect(() => { if (inView) { controls.start('visible') } else { controls.start('hidden') } }, [controls, inView])
    return (
        <div className="h-screen bg-[#176B87] text-white">
          <div className="container mx-auto flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5, type: 'spring', stiffness: 80 }}
              className="flex flex-col items-center"
            >
              <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-5xl font-bold mb-4 gradient-textpsych"
              >
               Sometimes,<br></br> 
               sharing our concerns with others,
               <br></br>talking about them helps us more than we can ever imagine.
              </motion.h1>
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-xl mb-8"
              >
            We have access to professional psychologists who assist us in rising over the zero line.
              </motion.p>
              <Link to="/psychiatrist">
              <button className="font-sans text-lg rounded-md uppercase text-white cursor-pointer border-3 border-blue-500 p-2 px-4 relative select-none shadow-1 shadow-2 shadow-3 shadow-4 shadow-5 transition-transform duration-200 ease-in-out transform hover:translate-x-1 hover:translate-y-1 bg-[#0c131d] hover:bg-[#223d62] skew-x-12">
                Consult Psychiatirist
              </button>
              </Link>
            </motion.div>
            <div ref={ref}> <motion.img initial="hidden" animate={controls} variants={boxVariant} src="/assets/images/psych.jpeg" alt="Animated image" className="rounded-lg mb-8 m-8 w-[80%] h-[80%]" /> </div>
          </div>
        </div>
      );
}

export default Contactpsych