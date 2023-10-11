import React from 'react';
import './SolvedQuiz.css';


const SolvedQuiz = ({ questionNumber, date, question, explanation, correctAnswer, isCorrect }) => {
  return (
    <div className={`solved-quiz ${isCorrect ? 'correct' : 'incorrect'}`}>
      

      <div className="solvedQuizItem">
        <div>{questionNumber}</div>
        <div>{date}</div>
        <div>{question}</div>
        <div>{explanation}</div>
        <div>{correctAnswer}</div>
        <div>{isCorrect ? '정답' : '오답'}</div>
      </div>
    </div>
  );
};

export default SolvedQuiz;
