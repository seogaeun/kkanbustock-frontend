import React from 'react'
import './QuizPage.css'
import Header from '../../components/Header/Header'
import DailyQuiz from '../../components/Quiz/DailyQuiz'
function Quiz() {
    return (
        <div>
            <Header name='퀴즈'/>
            <div className='dailyQuizSection'>
                <DailyQuiz/>
            </div>
        </div>
    )
}

export default Quiz
