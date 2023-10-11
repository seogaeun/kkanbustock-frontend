import React from 'react';
import "./InvestType_result.css";
import SOL_info from "./../../assets/images/SOL_info.png";


let nickname="게스트";
let InvestType="공격투자형(1등급)"

function InvestType_result() {
    return (
        <div className='center-container'>
            <div className='up-container'>
                    <div className='intro-title'>
                        <h2><span>{nickname}</span>님은</h2>
                        <h1>{InvestType} 입니다.</h1>
                    </div>
                    <img alt="안내하는 쏠" src={SOL_info}></img>
            </div>
            <div className='down-container'>
                <div className='typeText'>
                    <h3>{InvestType}은...</h3>
                    <p>
                    시장평균 수익률을 훨씬 넘어서는 수준의 투자수익을 추구하며 
이을 위해 자산가치의 변동에 따른 손실위험을 적극 수용해요
                    </p>
                </div>
                <div className='line'></div>
                <div className='typeRecommand'>
                    <h3>{InvestType}에게 어울리는 전략</h3>
                    <ul>
                        <li>컨텐츠1 내용이 여기에 들어갑니다</li>
                        <li>컨텐츠2 내용이 여기에 들어갑니다</li>
                        <li>컨텐츠3 내용이 여기에 들어갑니다</li>
                    </ul>                    
                </div>
            </div>
            <button>상품 추천 받기</button>
        </div>
    );
}

export default InvestType_result;
