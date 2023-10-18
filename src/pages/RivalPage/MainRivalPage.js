import "./MainRivalPage.css";
import ViewScoreComponent from "./../../components/ViewScore/ViewScoreComponent";
import StockListComponent from "./../../components/StockList/StockListComponent";
import MyGroupComponent from "./../../components/MyGroup/MyGroupComponent.js";
import BlueLargeBtn from "../../components/ButtonComponent/BlueLargeBtn";
import React, { useState, useEffect } from 'react';

const stockDataList = [
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: -1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },
    { profitRate: 0, stockName: "Unity Software", quantity: 22, purchasePrice: 2129 },
    { profitRate: 1, stockName: "Unity Software", quantity: 22, purchasePrice: 2183729 },

    // 다른 객체들도 여기에 추가 가능
];

function RivalPage() {
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        // Nav의 높이 측정
        const navElement = document.querySelector(".nav");
        if (navElement) {
            const height = navElement.clientHeight;
            setNavHeight(height);
        }
    }, []);

    const rivalPageStyle = {
        marginTop: `${navHeight}px`, // Nav의 높이를 margin-top 값으로 설정
    };

    return (
        <div className="RivalPageWrap" style={rivalPageStyle}>
            <ViewScoreComponent></ViewScoreComponent>
            <div className="ViewMyStockSection">
                <StockListComponent who="나" stockDataList={stockDataList} width="800px" height="100%"></StockListComponent>
                <BlueLargeBtn title="투자하러 가기"></BlueLargeBtn>
            </div>
            <MyGroupComponent memberId="kim"></MyGroupComponent>
        </div>
    )
}

export default RivalPage;