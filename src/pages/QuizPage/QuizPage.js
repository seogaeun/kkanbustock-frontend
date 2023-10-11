import React from 'react'
import './QuizPage.css'
import Header from '../../components/Header/Header'
import DailyQuiz from '../../components/Quiz/DailyQuiz'

function Quiz() {
    return (
        <div>
            <Header name='퀴즈'/>
            <div className='dailyQuizSection'>
                <DailyQuiz
                    question="매수란 주식을 파는 것을 의미한다."
                    explanation="주식을 파는 행위는 매도입니다."
                />
            </div>
        </div>
    )
}

export default Quiz
