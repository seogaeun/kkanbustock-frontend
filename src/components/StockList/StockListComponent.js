import React from 'react';
import "./StockListComponent.css"
import StockListCover from "./StockListCover";
import StockListItem from "./StockListItem";
import WhiteContentBtn from "./../ButtonComponent/WhiteContentBtn";


function StockListComponent({stockDataList,width,height,who="나"}) {
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
            <div className="stockListContent" style={{ width: width }}>
                <StockListCover >
                    {stockListItems}
                </StockListCover>
            </div>
            <WhiteContentBtn width={width} height={height}>
                <div className='manyStockContent'>
                    <div className='manyStockTitle'>{who}가 가장 많이 투자한 종목</div>
                    <div className='manyStockName'>Unity Software</div>
                </div>

                
            </WhiteContentBtn>
        </div>
    )
}

export default StockListComponent;
