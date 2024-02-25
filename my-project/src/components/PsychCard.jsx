import { useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const PsychCard = ({psych}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
 
 

    console.log(psych)
    // Step 4: Set the sum state variabl
    return (
        <div className="max-w-2xl mx-auto bg-slate-700 rounded-md overflow-hidden shadow-md my-8 flex">
         <img
            src="/upload/r.jpg"
            alt="Blog Image"
            className="w-[25%] h-[20%] object-cover object-center"
          />
          <div className="w-1/2 p-6">
            <div className="w-full flex flex-col">
            <h2 className="text-xl font-semibold text-white mb-2">
              {psych.psname}
            </h2>
            <h2 className="text-white my-4">
            Psych Experience-{psych.psexpertise} 
            </h2>

            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white my-4">Contact Number-{psych.pscontnum}</span>
              <span className="mx-2 text-white my-4">EmailId-{psych.psemail}</span>
              <span>
             
          </span>
            </div>
          </div>
        </div>
      );
}

export default PsychCard
