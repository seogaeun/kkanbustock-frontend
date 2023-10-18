import React from 'react';
import "./InvestTypeDescript.css";
import SOL_info from "./../../assets/images/SOL_info.png";
import BlueSmallBtn from '../ButtonComponent/BlueSmallBtn';

function InvestTypeDescript({InvestType="공격투자형"}) {


    const investTypeDescriptions = {
        "공격투자형": {
          description: "시장평균 수익률을 훨씬 넘어서는 수준의 투자수익을 추구하며 이를 위해 자산가치의 변동에 따른 손실위험을 적극 수용해요. 투자자금 대부분을 주식, 주식형 펀드 또는 파생상품 등의 위험자산에 투자할 의향이 있는 유형입니다😄",
          strategy: ["step1! 메인 화면에서 스크롤을 하며 주식 정보 알아보기!", "step2! 신한투자증권 사이트에서 주식 투자하기!", "step3! 깐부와 함께 주식 경쟁하기!"]
        },
        "위험중립형": {
          description: "투자자는 그에 상응하는 투자위험이 있음을 충분히 인식하고 있으며, 예적금보다 높은 수익을 기대할 수 있다면 일정수준의 위험을 감수 할 수 있는 유형입니다😄",
          strategy: ["step1! 주식 투자하는 깐부와 그룹 맺기!", "step2! 깐부의 포트폴리오 확인하기!", "step3! 신한투자증권에서 주식 투자해보기!"]
        },
        "안정추구형": {
          description: "투자원금의 손실위험은 최소화 하고, 이자소득이나 배당소득 수준의 안정적인 투자를 목표로 함. 다만, 수익을 위해 단기적인 손실을 수용할 수 있으며, 예적금보다 높은 수익을 위해 자산 중 일부를 변동성 높은 상품에 투자할 의향이 있는 유형입니다😄",
          strategy: ["step1! 사전 페이지에서 다양한 주식 용어 및 투자 방법 확인하기!", "step2! 퀴즈를 통해 복습해보기!","step3! 메인 페이지를 스크롤 해보며 경제 분석을 통해 본인의 투자 전략 만들어보기!"]
        }
      };
      const investTypeDescription = investTypeDescriptions[InvestType];

  
      if (!investTypeDescription) {
        // 잘못된 투자 유형이 입력된 경우 처리
        return null;
      }
    
      const { description, strategy } = investTypeDescription;



    return (
        <div className='investTypeDescript'>
            <div className="investTypeDescriptWrap">
                <div className='typeText'>
                        <h3 className='typeDescriptText'>{InvestType}은...</h3>
                        <div className="typeFlavorDescript">
                            {description}
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='typeRecommand'>
                        <h3 className='typeDescriptText'>{InvestType}에게 어울리는 전략</h3>
                        <ul>
                        {strategy.map((strategyItem, index) => (
                            <li className="typeFlavorDescript" key={index}>{strategyItem}</li>
                        ))}
                        </ul>                    
                    </div>
            </div>

            <div className="BtnZone">
                
                <BlueSmallBtn link="/Rival" title={"상품 추천 받기"}></BlueSmallBtn>
            </div>

        </div>
    );
}

export default InvestTypeDescript;
