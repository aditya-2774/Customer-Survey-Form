import React, { useState } from "react";
import SurveyQuestion from "./components/SurveyQuestion";
import ThankYouScreen from "./components/ThankYouScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import questions from "./utils/Questions";
import { getSessionId, saveAnswer, completeSurvey } from "./utils/Session";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const sessionId = getSessionId();

  const handleNextQuestion = (answer) => {
    saveAnswer(sessionId, questions[currentQuestionIndex].id, answer);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeSurvey(sessionId);
      setSurveyCompleted(true);
      setTimeout(() => {
        setShowWelcomeScreen(true);
        setSurveyCompleted(false);
        setCurrentQuestionIndex(0);
      }, 5000);
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeSurvey(sessionId);
      setSurveyCompleted(true);
      setTimeout(() => {
        setShowWelcomeScreen(true);
        setSurveyCompleted(false);
        setCurrentQuestionIndex(0);
      }, 5000);
    }
  };

  const handleStartSurvey = () => {
    setShowWelcomeScreen(false);
  };

  if (showWelcomeScreen) {
    return <WelcomeScreen onStart={handleStartSurvey} />;
  }

  if (surveyCompleted) {
    return <ThankYouScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
      <SurveyQuestion
        question={questions[currentQuestionIndex]}
        onNext={handleNextQuestion}
        onSkip={handleSkipQuestion}
        questionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default App;
