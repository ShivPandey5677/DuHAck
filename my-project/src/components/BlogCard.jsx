
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

const BlogCard = ({blog}) => {
  const controls = useAnimation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
      controls.start({ opacity: 1, translateY: 0, transition: { duration: 0.3 } });
    }, 250);

    return () => clearTimeout(timeout);
  }, [controls]);
  
  return (
    <div className="max-w-2xl mx-auto bg-slate-700 rounded-md overflow-hidden shadow-md my-8 flex">
      <img
        src="/upload/r.jpg"
        alt="Blog Image"
        className="w-1/2 h- object-cover object-center rounded-lg"
      />
      <div className="w-1/2 p-6">
        <h2 className="text-xl font-semibold text-white-800 mb-2">
          {blog.btitle}
        </h2>
        <p className="text-white-600 mb-4">
         {blog.bcontent}
        </p>
        <div className="flex items-center">
          <span className="text-sm "><a href={blog.blink}>Read more</a> </span>
          <span>
         
      </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
