import React from 'react';
import "./StockListComponent.css"
import StockListCover from "./StockListCover";
import StockListItem from "./StockListItem";
import WhiteContentBtn from "./../ButtonComponent/WhiteContentBtn";

const stockDataList = [
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: -1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: 0, stockName: "Unity Software", quantity: 22, purchasePrice: 2129 },
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },

    // 다른 객체들도 여기에 추가 가능
];
const who ="나";
function StockListComponent() {
    const stockListItems = stockDataList.map((data, index) => (
        <StockListItem
            key={index}
            profitRate={data.profitRate}
            stockName={data.stockName}
            quantity={data.quantity}
            purchasePrice={data.purchasePrice}
        />
    ));

    return (
        <div className='StockListComponentWrap'>
            <div className='stockListContentTitle'>
                {who}의 포트폴리오
            </div>
            <div className="stockListContent">
                <StockListCover>
                    {stockListItems}
                </StockListCover>
            </div>
            <WhiteContentBtn width="400px" height="100px">
                <div className='manyStockContent'>
                    <div className='manyStockTitle'>{who}가 가장 많이 투자한 종목</div>
                    <div className='manyStockName'>Unity Software</div>
                </div>

                
            </WhiteContentBtn>
        </div>
    )
}

export default StockListComponent;
