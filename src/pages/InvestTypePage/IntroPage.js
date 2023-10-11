import React from 'react';
import "./IntroPage.css";
import SOL_hello from "./../../assets/images/sol-hello.png";

let nickname = "게스트";

function InvestType_intro() {
    return (
        <div className='center-container'>
            <div className='InvestType_intro'>
                <div className='intro-container'>
                    <div className='intro-title'>
                        <h2><span>{nickname}</span>님의</h2>
                        <h1>투자성향테스트</h1>
                    </div>
                    <button>시작하기</button>
                </div>
                <img alt="안녕하세요 쏠" src={SOL_hello} />
            </div>
        </div>
    );
}

export default InvestType_intro;
