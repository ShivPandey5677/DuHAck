import React from 'react'

const PsychCard = ({psych}) => {
    return (
        <div className="max-w-2xl mx-auto bg-slate-700 rounded-md overflow-hidden shadow-md my-8 flex">
         <img
            src="assets/images/r.jpg"
            alt="Blog Image"
            className="w-[25%] h-[20%] object-cover object-center"
          />
          <div className="w-1/2 p-6">
            <div className="w-full flex flex-col">
            <h2 className="text-xl font-semibold text-white-800 mb-2">
              {psych.name}
            </h2>
            <h2 className="text-white-600 m-4">
              Psych Experience-10 
            </h2>

            </div>
            <div className="flex items-center">
              <span className="text-sm text-white-700">number</span>
              <span className="mx-2 text-white-400">email</span>
              <span>
             
          </span>
            </div>
          </div>
        </div>
      );
}

export default PsychCard
