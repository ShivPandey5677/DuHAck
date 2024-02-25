import React, { useEffect, useState } from 'react'
import { motion,useAnimation } from 'framer-motion';
import {useInView} from "react-intersection-observer";
import { Link } from 'react-router-dom';
const Blog1 = () => {
    const boxVariant = {
        visible: { opacity: 1,
            y: [-100, 20, 0] ,x: 60 },
        hidden:{ opacity: 0,
            y: 0 ,x:0}
      };
      const [ref, inView] = useInView() 
      const controls = useAnimation()

      useEffect(() => { if (inView) { controls.start('visible') } else { controls.start('hidden') } }, [controls, inView])
    return (
        <div className="h-screen bg-[yellow] text-black ">
          <div className="container mx-auto flex items-center justify-center h-full">
            <motion.div
            //   initial={{ opacity: 0, y: 20, scale: 0.8 }}
            //   animate={{ opacity: 1, y: 0, scale: 1 }}
            //   transition={{ delay: 0.5, duration: 1.5, type: 'spring', stiffness: 80 }}

            initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.0 }}
              className="flex flex-col items-center"
            >
              <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-5xl font-bold mb-4"
              >
                Blogs that you might want to read about!
              </motion.h1>
                <br></br>
                <Link to="/depblg">
              <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#e6e6fa", color: "black" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className=" text-2xl my-button"
    >
      <b>Depression</b>
    </motion.button>
    </Link>
    <br></br>
    <Link to="/strblg">  
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#e6e6fa", color: "black" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className=" text-2xl my-button"
    >
      <b>Stress</b>
    </motion.button>
    </Link>
    <br></br>
    <Link to="/anxblg">
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#e6e6fa", color: "black" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="text-2xl my-button"
    >
      <b>Anxiety</b>
    </motion.button>
    </Link>
    <br></br>
    <Link to="/trablg">
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#e6e6fa", color: "black" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="text-2xl my-button"
    >
      <b>Trauma</b>
    </motion.button>
    </Link>

    <br></br>

    </motion.div>


            <div ref={ref}> <motion.img initial="hidden" animate={controls} variants={boxVariant} src="/assets/images/w.jpg" alt="Animated image" className="rounded-lg mb-8 m-8 w-[60%] h-[60%]" /> </div>
          </div>
        </div>
      );
}

export default Blog1
