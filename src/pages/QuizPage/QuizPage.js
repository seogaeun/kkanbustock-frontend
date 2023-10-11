import React from 'react'
import './QuizPage.css'
import Header from '../../components/Header/Header'
import DailyQuiz from '../../components/Quiz/DailyQuiz/DailyQuiz.js'
import QuizHistory from '../../components/Quiz/QuizHistory/QuizHistory'

function Quiz() {

    // 임의의 퀴즈 데이터 생성
  const quizData = [
    {
      questionNumber: 1,
      date: '2023-10-11',
      question: '이것은 테스트 문제입니다.',
      explanation: '이 문제는 테스트 목적으로 작성되었습니다.',
      correctAnswer: 'o',
      isCorrect: true,
    },
    {
      questionNumber: 2,
      date: '2023-10-12',
      question: '또 다른 테스트 문제입니다.',
      explanation: '이 또한 테스트 목적으로 작성되었습니다.',
      correctAnswer: 'x',
      isCorrect: false,
    },
    // 추가 퀴즈 항목을 추가할 수 있습니다.
  ];

    return (
        <div className='quizPage'>
            <Header name='QUIZ'/>

            <div className='dailyQuizSection'>
                <DailyQuiz
                    question="매수란 주식을 파는 것을 의미한다."
                    explanation="주식을 파는 행위는 매도입니다."
                />
            </div>
            
            <QuizHistory quizData={quizData}/>
            
        </div>
    )
}

export default Quiz
