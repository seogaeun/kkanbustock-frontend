import React from 'react'
import Header from '../Header/Header'
import './DailyQuiz.css'

function DailyQuiz(props) {
    const { question, explanation} = props;

    return (
        <div className='dailyQuiz'>
            <div className='quizTitle'>오늘의 퀴즈</div>
            <div className='dailyQuizQnASet'>
                <div id='question'>{question}</div>
                <div id='explanation'>{explanation}</div>
                <div className='oxbtn'>
                    <button className='answer'>O</button>
                    <button className='answer'>X</button>
                </div>
            </div>
        </div>
    )
}

export default DailyQuiz
