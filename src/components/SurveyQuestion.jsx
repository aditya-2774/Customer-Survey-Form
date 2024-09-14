import React, { useState } from "react";
import StarRating from "./StarRating";

const SurveyQuestion = ({ question, onNext, onSkip, questionIndex, totalQuestions }) => {
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    onNext(answer);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl mt-10 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{`Question ${questionIndex + 1}/${totalQuestions}`}</h2>
      <p className="text-lg mb-6 text-gray-700">{question.question}</p>

      {question.type === "rating" && (
        <StarRating
          rating={answer}
          onRatingChange={(value) => setAnswer(value)}
          totalStars={question.scale}
        />
      )}
      {question.type === "text" && (
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your response here..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      )}

      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 hover:text-gray-900 transition duration-300 flex items-center space-x-2"
          onClick={onSkip}
        >
          <i className="fas fa-arrow-left"></i>
          <span>Skip Question</span>
        </button>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
          onClick={handleNext}
        >
          <i className="fas fa-arrow-right"></i>
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default SurveyQuestion;
