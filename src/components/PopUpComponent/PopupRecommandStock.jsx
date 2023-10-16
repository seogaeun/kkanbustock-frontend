import React, { useState } from 'react';
import './PopupPortRecommandStock.css';
import PopupComponent from './PopupComponent';
import InvestmentAppetiteBox from '../MainPage/investment-appetite-box';

function PopupPortRecommandStock({userInfo,stockDataList,isOpen,closeModal}) {

  return (
            <PopupComponent isOpen={isOpen} closeModal={closeModal}>
                <div className='PopupPortRecommandStockWrap'>
                    <div className="PopupPortRecommandStock-Title">My 추천 종목</div>
                    <div className="PopupPortRecommandStock-upContent">
                      <div className="RecommandStockBox">
                        <InvestmentAppetiteBox/>
                      </div>
                      <div className="RecommandStockBox">
                        <InvestmentAppetiteBox/>
                      </div>
                      <div className="RecommandStockBox">
                        <InvestmentAppetiteBox/>
                      </div>

                    </div>

                </div>
            </PopupComponent>


  );
}
export default PopupPortRecommandStock;