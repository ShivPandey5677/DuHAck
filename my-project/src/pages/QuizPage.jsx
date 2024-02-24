import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuizPage = () => {
  const questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
    {
      question: 'Which is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
    // Add more questions as needed
  ];

  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    console.log('Selected options:', selectedOptions);
  };

  const handleClearAll = () => {
    setSelectedOptions(Array(questions.length).fill(null));
  };

  const shuffleQuestions = () => {
    // Implement logic to shuffle questions array randomly
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  return (
    <motion.div className="mx-auto p-4 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-3xl font-bold mb-8 text-center">Quiz</h1>
      {questions.map((question, index) => (
        <motion.div key={index} className="mb-8 border-b-2 border-gray-200" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
          <p className="font-semibold mb-2 text-lg">Question {index + 1}:</p> {/* Increased font size */}
          <motion.div className="bg-gray-100 p-4 rounded-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 + 0.1 }}>
            <p className="text-lg">{question.question}</p> {/* Increased font size */}
          </motion.div>
          <ul className="list-none mt-4">
            {question.options.map((option, optionIndex) => (
              <motion.li key={optionIndex} className="mb-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 + optionIndex * 0.1 }}>
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
      <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: questions.length * 0.2 + 0.2 }}>
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 mr-4" onClick={handleSubmit}>Submit</button>
        <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600" onClick={handleClearAll}>Clear All</button>
      </motion.div>
    </motion.div>
  );
};

export default QuizPage;
