import React, { useState, useEffect } from "react";
import "./QuizPage.css";
import Header from "../../components/Header/Header";
import DailyQuiz from "../../components/Quiz/DailyQuiz/DailyQuiz.js";
import QuizHistory from "../../components/Quiz/QuizHistory/QuizHistory";
import axios from "axios";

function Quiz() {
  const [quizContents, setQuizContents] = useState([]); // API에서 가져온 데이터를 저장하는 상태
  const memberId = "1";

  useEffect(() => {
    // API에서 데이터를 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/quizzes/${memberId}`);
        const formattedData = response.data.map((quiz, index) => {
          const solvedDate = new Date(quiz.solvedDate);
          const formattedDate = `${solvedDate.getFullYear()}-${(
            solvedDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${solvedDate
            .getDate()
            .toString()
            .padStart(2, "0")}`;
          return {
            questionNumber: index + 1,
            date: formattedDate,
            question: quiz.answer,
            correctAnswer: quiz.content,
            isCorrect: quiz.correct,
            explanation: quiz.explanation,
          };
        });
        setQuizContents(formattedData);
        console.log("데이터 불러오기 성공");
        console.log(formattedData);
      } catch (error) {
        console.error("데이터 불러오기 실패", error);
        setQuizContents([
          {
            questionNumber: 1,
            date: "2023-10-11",
            question:
              "주식이란 주식회사의 자본을 일정한 금액으로 분할한 것이다.",
            correctAnswer: "o",
            isCorrect: true,
          },
        ]);
      }
    };

    fetchData();
  }, []);

  // 임의의 오늘의 퀴즈 데이터
  const StockQuiz = [
    {
      id: 1,
      content: "매수란 주식을 파는 것을 의미한다.",
      explanation: "주식을 파는 행위는 매도입니다.",
      answer: "x",
      isSolved: true,
    },
  ];

  return (
    <div className="quizPage">
      <Header name="QUIZ" />
      <div className="dailyQuizSection">
        <DailyQuiz memberId={memberId} />
      </div>
      <QuizHistory quizData={quizContents} />
    </div>
  );
}

export default Quiz;
