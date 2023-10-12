import React, { useState } from "react";
import "./DailyQuiz.css";

function DailyQuiz({ stockQuiz }) {
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (selectedAnswer) => {
    if (answered) {
      return; // 이미 답을 선택했으면 아무 작업도 하지 않음
    }

    const isAnswerCorrect = selectedAnswer === stockQuiz[0].answer;
    setSelectedAnswer(selectedAnswer); // 선택한 답을 저장
    setIsCorrect(isAnswerCorrect); // 정답 여부를 저장
    setAnswered(true);

    // 선택된 버튼의 배경색을 파란색으로 변경
    const buttons = document.querySelectorAll(".oxbtn button");
    buttons.forEach((button) => {
      button.classList.remove("selected");
    });
    const selectedButton = document.querySelector(
      `.oxbtn button.${selectedAnswer}`
    );
    if (selectedButton) {
      selectedButton.classList.add("selected");
    }
  };

  return (
    <div className="dailyQuiz">
      <div className="quizTitle">오늘의 퀴즈</div>
      <div className={`dailyQuizQnASet ${answered ? "answered" : ""}`}>
        <div id="question">{stockQuiz[0].content}</div>
        {answered && stockQuiz[0].answer === "x" && (
          <div id="explanation">{stockQuiz[0].explanation}</div>
        )}
        <div className="oxbtn">
          <button
            className={`answer ${selectedAnswer === "o" ? "selected" : ""} ${
              answered ? "answered" : ""
            }`}
            onClick={() => handleAnswerClick("o")}
          >
            O
          </button>
          <button
            className={`answer ${selectedAnswer === "x" ? "selected" : ""} ${
              answered ? "answered" : ""
            }`}
            onClick={() => handleAnswerClick("x")}
          >
            X
          </button>
        </div>
      </div>
      {answered && (
        <div className={`answerStatus ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect
            ? "정답입니다!"
            : `땡! 정답은 '${stockQuiz[0].answer}'입니다`}
        </div>
      )}
    </div>
  );
}

export default DailyQuiz;
