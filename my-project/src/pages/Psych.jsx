import React, { useContext, useEffect, useState } from 'react'
import PsychCard from '../components/PsychCard'
import { AuthContext } from '../context/authContext';
import { useAnimation } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const Psych = () => {
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
      queryKey: ["psych"],
      queryFn: () => makeRequest.get("/psych").then((res) => {
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
    <div className="bg-[#86B6F6] h-[100vh]">
      <h1 className="text-6xl text-center text-[#176B87]">Psychiatrist For You</h1>
      {data.map((psych) => (
        <PsychCard psych={psych} key={psych.psid} />
      ))}
    </div>
  );
}

export default Psych
