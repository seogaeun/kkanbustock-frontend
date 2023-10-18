import "./MainRivalPage.css";
import ViewScoreComponent from "./../../components/ViewScore/ViewScoreComponent";
import StockListComponent from "./../../components/StockList/StockListComponent";
import MyGroupComponent from "./../../components/MyGroup/MyGroupComponent.js";
import BlueLargeBtn from "../../components/ButtonComponent/BlueLargeBtn";
import React, { useState, useEffect } from 'react';


const arr1 = [1,2,3];
const arr2 = [4,5,6];

let result = [arr2, ...arr1];
console.log(result[1]);

const memberId = "dd";
const stockDataList = []; // 실제 데이터로 설정하세요

function RivalPage() {
  const [navHeight, setNavHeight] = useState(0);
  const [viewOurStock, setViewOurStock] = useState(false); // 렌더링 제어를 위한 상태

  useEffect(() => {
    // Nav의 높이 측정
    const navElement = document.querySelector(".nav");
    if (navElement) {
      const height = navElement.clientHeight;
      setNavHeight(height);
    }
  }, []);

  useEffect(() => {
    // stockDataList가 비어있는지 확인하고 그에 따라 상태 설정
    if (stockDataList && stockDataList.length > 0) {
      setViewOurStock(true);
    } else {
      setViewOurStock(false);
    }
  }, [stockDataList]);

  const rivalPageStyle = {
    marginTop: `${navHeight}px`,
  };

  const handleGroupItemClick = (group) => {
    // 그룹 정보 처리
    console.log("그룹을 클릭했습니다:", group);
    // 그룹을 클릭했을 때 ViewOurStockSection을 보여줄지 결정
    if (group && group.name === "일치하는 이름") {
      setViewOurStock(true);
    } else {
      setViewOurStock(false);
    }
  };

  return (
    <div>
      <div className="RivalPageWrap" style={rivalPageStyle}>
        <ViewScoreComponent memberId={memberId}></ViewScoreComponent>
        {viewOurStock ? (
          <div className="ViewOurStockSection">
            <StockListComponent memberId={memberId} stockDataList={stockDataList} width="400px" height="100%"></StockListComponent>
            <StockListComponent memberId={memberId} stockDataList={stockDataList} width="400px" height="100%"></StockListComponent>
          </div>
        ) : (
          <div className="ViewMyStockSection">
            <StockListComponent memberId={memberId} stockDataList={stockDataList} width="800px" height="100%"></StockListComponent>
          </div>
        )}
        <BlueLargeBtn title="투자하러 가기"></BlueLargeBtn>
        <MyGroupComponent memberId={memberId} onGroupItemClick={handleGroupItemClick} />
      </div>
    </div>
  )
}

export default RivalPage;
