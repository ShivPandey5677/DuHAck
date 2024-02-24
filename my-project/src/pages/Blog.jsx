import React, { useState } from "react";
import './App.css'
import BlogCard from './components/BlogCard';

const Blog = () => {
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
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
    )
}

export default Blog







