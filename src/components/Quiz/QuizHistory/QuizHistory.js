import React, { useState } from 'react';
import './QuizHistory.css'
import SolvedQuiz from '../SolvedQuiz/SolvedQuiz';

const QuizHistory = ({ quizData }) => {

  const [selectedOption, setSelectedOption] = useState('');


  const handleSelectChange = (event) => {
    console.log('Selected Option:', event.target.value);
    setSelectedOption(event.target.value);
  };

  const filteredQuizData = selectedOption
    ? quizData.filter((quiz) => (quiz.isCorrect && selectedOption === '정답') || (!quiz.isCorrect && selectedOption === '오답'))
    : quizData;

    return (
      <div className='quizHistory'>
        <h2>문제 풀이 내역</h2>
        <div>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">전체</option>
          <option value="정답">정답</option>
          <option value="오답">오답</option>
        </select>
      </div>
        <div className='listHeader'>
            <div className='no'>NO</div>
            <div className='date'>날짜</div>
            <div className='q'>문제</div>
            <div className='a'>정답</div>
            <div className='result'>결과</div>
        </div>

        <ul>
          {quizData && quizData.map((quiz, index) => (
            <SolvedQuiz
              key={index}
              questionNumber={quiz.questionNumber}
              date={quiz.date}
              question={quiz.question}
              explanation={quiz.explanation}
              correctAnswer={quiz.correctAnswer}
              isCorrect={quiz.isCorrect}
            />
          ))}
        </ul>

      </div>
    );
  };
export default QuizHistory;
