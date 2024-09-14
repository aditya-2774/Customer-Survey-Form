export const getSessionId = () => {
  let sessionId = localStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = `session-${Date.now()}`;
    localStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

export const saveAnswer = (sessionId, questionId, answer) => {
  const surveyData = JSON.parse(localStorage.getItem(sessionId)) || {};
  surveyData[questionId] = answer;

  localStorage.setItem(sessionId, JSON.stringify(surveyData));

  console.log("Saved Answer:", { sessionId, questionId, answer });
  console.log("Current Survey Data:", surveyData);
};

export const completeSurvey = (sessionId) => {
  const surveyData = JSON.parse(localStorage.getItem(sessionId)) || {};
  surveyData.status = 'COMPLETED';
  localStorage.setItem(sessionId, JSON.stringify(surveyData));
  console.log("Survey Completed:", surveyData);
};
