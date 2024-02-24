import React, { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AuthContext } from '../context/authContext';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const QuizPage = () => {
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
      queryKey: ["questions"],
      queryFn: () => makeRequest.get("/product").then((res) => {
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
  const [selectedOptions, setSelectedOptions] = useState(Array(data.length).fill(null));
  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };
  const handleSubmit = () => {
    // Step 3: Loop through selected options and calculate sum
    let totalSum = 0;
    data.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
      if (selectedOption) {
        totalSum += parseInt(selectedOption.value);
      }
    });
    // Step 4: Set the sum state variable
    setSum(totalSum);
  };
  const handleClearAll = () => {
    // Reset selected options array to null
    setSelectedOptions(Array(data.length).fill(null));
    // Reset the sum to zero
    setSum(0);
  };

  return (
    <motion.div className="mx-auto p-4 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-3xl font-bold mb-8 text-center">Quiz</h1>
      {data.map((question, index) => (
        <motion.div key={index} className="mb-8 border-b-2 border-gray-200" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
          <p className="font-semibold mb-2 text-lg">Question {index + 1}:</p>
          <motion.div className="bg-gray-100 p-4 rounded-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 + 0.1 }}>
            <p className="text-lg">{question.question}</p>
          </motion.div>
          <ul className="list-none mt-4">
            {[question.option1, question.option2, question.option3, question.option4].map((option, optionIndex) => (
              <motion.li key={optionIndex} className="mb-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }}>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={optionIndex}
                    checked={selectedOptions[index] === optionIndex}
                    onChange={() => handleOptionSelect(index, optionIndex)}
                    className="mr-2"
                  />
                  <span>{option}</span>
                </label>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
      <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: data.length * 0.2 + 0.2 }}>
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 mr-4" onClick={handleSubmit}>Submit</button>
        <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600" onClick={handleClearAll}>Clear All</button>
      </motion.div>
      {sum !== 0 && (
        <motion.div className="h1-bold mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: data.length * 0.2 + 0.2 }}>
           {sum>40?<h1>Severe Symptom:Consider Seeking Profressional help</h1>:sum>30?<h1>Moderate symptoms of stress or anxiety</h1>:sum>20?<h1> Mild symptoms of stress or anxiety
</h1>:<h1>No Significant Issues</h1>}
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizPage;
