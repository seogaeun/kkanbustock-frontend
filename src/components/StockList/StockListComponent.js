import React from 'react';
import "./StockListComponent.css"
import StockListCover from "./StockListCover";
import StockListItem from "./StockListItem";

function StockListComponent() {
    return (
        <div className="stockListContent">
            <StockListCover>
                <StockListItem></StockListItem>
                <StockListItem></StockListItem>
                <StockListItem></StockListItem>
                <StockListItem></StockListItem>
                <StockListItem></StockListItem>
                <StockListItem></StockListItem>
                <StockListItem></StockListItem>
            </StockListCover>
        </div>
    )
}

export default StockListComponent;
