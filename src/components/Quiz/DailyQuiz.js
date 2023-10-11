import React from 'react'
import Header from '../Header/Header'
import './DailyQuiz.css'

function DailyQuiz() {
    return (
        <div className='dailyQuiz'>
            <div className='title'>오늘의 퀴즈</div>
            <div className='quiz'>
                <div id='question'>매수란 주식을 파는 것을 의미한다.</div>
                <div id='explanation'>주식을 파는 행위는 매도입니다.</div>
                <div id='answer'>
                    <button>O</button>
                    <button>X</button>
                </div>
            </div>
        </div>
    )
}

export default DailyQuiz
