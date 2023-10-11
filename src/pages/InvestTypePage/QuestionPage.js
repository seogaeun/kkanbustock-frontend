import React from 'react';
import "./QuestionPage.css";
import SOL_happy from "./../../assets/images/SOL_happy.png";
import Quiz from "./../../assets/images/quiz1.png";

const quiz_number=1;
let quiz_title = "경기 침체로 인해 투자 시장이 좋지만은 않은데..!";
let select1 = "이럴 때 더 공격적으로!” 미래를 보고 더 투자한다";
let select2 = "“더 떨어지기 전에 나오자!!” 지금 안정적인 게 더 중요하다.";



function InvestType_question() {
    return (
        <div className='center-container'>
            <div className='progressBar'>
                <div className='progressBar-now'>
                    <div className='progressBar-Blue'></div>
                    <img alt="행복한 쏠" src={SOL_happy}></img>
                </div>
            </div>
            <div className='quiz-container'>
                <div className='quiz-title'>
                    <h2>Q{quiz_number}</h2>
                    <h1>{quiz_title}</h1>
                </div>
                <div className='quiz-mainContent'>
                    <img alt="퀴즈 이미지" src={Quiz}></img>
                    <div className='quiz-select'>
                        <button>{select1}</button>
                        <button>{select2}</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default InvestType_question;
