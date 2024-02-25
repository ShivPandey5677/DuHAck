import React, { useContext, useEffect, useState } from "react";
import BlogCard from './BlogCard';
import { AuthContext } from '../context/authContext';
import { useAnimation } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const TraBlog = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const controls = useAnimation();
    const [searchTerm, setSearchTerm] = useState('');
    const {currentUser}=useContext(AuthContext);
    const [sum, setSum] = useState(0); // Step 1: Initialize state variable for sum
   
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
        controls.start({ opacity: 1, translateY: 0, transition: { duration: 0.3 } });
      }, 250);
  
      return () => clearTimeout(timeout);
    }, [controls]);
  
    const { isLoading, error, data } = useQuery(
      {
        queryKey: ["blog"],
        queryFn: () => makeRequest.get("/blog/trablg").then((res) => {
          return res.data;
        })
      }
    )
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
      return (
          <div>
            <style>{`
              body, html {
                background-color: #000000; 
                min-height: 100vh;
                margin: 0;
                padding: 0;
              }
            `}</style>
      
            <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-white-800 mb-8 text-center">Latest Blogs</h1>
              <div className="space-y-8">
              {data.map((blog) => (
          <BlogCard blog={blog} key={blog.bid} />
        ))}
              </div>
            </div>
          </div>
      )
}

export default TraBlog
