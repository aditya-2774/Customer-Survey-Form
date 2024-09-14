import React from "react";
import { FaComments, FaChartBar } from "react-icons/fa";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">
        Welcome to Our Customer Feedback Survey
      </h1>
      <div className="flex space-x-6 mb-8">
        <FaComments className="text-white text-6xl animate-pulse" />
        <FaChartBar className="text-white text-6xl animate-pulse" />
      </div>
      <button
        onClick={onStart}
        className="bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-semibold shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-110 flex items-center space-x-3"
      >
        <i className="fas fa-play animate-spin-slow"></i>
        <span>Start Survey</span>
      </button>
    </div>
  );
};

export default WelcomeScreen;
