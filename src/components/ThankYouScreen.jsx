import React, { useEffect } from "react";
import { FaCheckCircle, FaSmile, FaHeart } from "react-icons/fa"; 

const ThankYouScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-green-300 to-green-400 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <h1 className="text-5xl font-bold text-green-800 animate-pulse">
        Thank You for Your Feedback!
      </h1>
      <div className="flex space-x-8 mt-4 animate-bounce">
        <FaCheckCircle className="text-green-700 text-6xl" />
        <FaSmile className="text-green-700 text-6xl" />
        <FaHeart className="text-green-700 text-6xl" />
      </div>
    </div>
  );
};

export default ThankYouScreen;
