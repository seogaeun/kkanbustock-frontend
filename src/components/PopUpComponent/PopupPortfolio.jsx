import React, { useState } from 'react';
import './PopupPortfolio.css';
import PopupComponent from './PopupComponent';
import StockListComponent from '../StockList/StockListComponent';
import BlueSmallBtn from '../ButtonComponent/BlueSmallBtn';


function PopupPortfolio({userInfo,stockDataList,isOpen,closeModal}) {

  return (
            <PopupComponent isOpen={isOpen} closeModal={closeModal}>
                <div className='PopupPortfolioWrap'>
                    <div className="PopupPortfolio-upContent">
                        <div>
                            <StockListComponent who="나" stockDataList={stockDataList} width="95%" height="100px"></StockListComponent>
                            
                        </div>
                    </div>
                    <div className="goStockBtn"> 
                        <BlueSmallBtn title="상품추천받기" ></BlueSmallBtn>
                    </div>

                </div>
            </PopupComponent>


  );
}
export default PopupPortfolio;