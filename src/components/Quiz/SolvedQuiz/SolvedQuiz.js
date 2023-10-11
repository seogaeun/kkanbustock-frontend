import React from "react";
import "./SolvedQuiz.css";

const SolvedQuiz = ({
  questionNumber,
  date,
  question,
  explanation,
  correctAnswer,
  isCorrect,
}) => {
  return (
    <div className="solvedItem">
      <div className={`solved-quiz ${isCorrect ? "correct" : "incorrect"}`}>
        <div className="solvedQuizItem">
          <div className="questionNumber">{questionNumber}</div>
          <div className="date">{date}</div>
          <div className="questionSet">
            <div className="qustion">{question}</div>
            <div className="explanation">{explanation}</div>
          </div>
          <div className="corretAnswer">{correctAnswer}</div>
          <div className="isCorrect">{isCorrect ? "정답" : "오답"}</div>
        </div>
      </div>
    </div>
  );
};

export default SolvedQuiz;
