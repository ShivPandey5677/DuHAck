
import React from 'react';

const BlogCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-slate-700 rounded-md overflow-hidden shadow-md my-8 flex">
      <img
        src="/assets/images/r.jpg"
        alt="Blog Image"
        className="w-1/2 h- object-cover object-center rounded-lg"
      />
      <div className="w-1/2 p-6">
        <h2 className="text-xl font-semibold text-white-800 mb-2">
          blog name
        </h2>
        <p className="text-white-600 mb-4">
          blog preview/description
        </p>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Author Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-white-700">John Doe</span>
          <span className="mx-2 text-white-400">&#8226;</span>
          <span className="text-sm text-white-400"><a href="#">Read more</a> </span>
          <span>
         
      </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
