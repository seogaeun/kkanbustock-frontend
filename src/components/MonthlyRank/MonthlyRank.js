import React from "react";
import "./MonthlyRank.css";
import goldMedal from "../../assets/images/medal/gold.png";
import silverMedal from "../../assets/images/medal/silver.png";
import bronzeMedal from "../../assets/images/medal/dong.png";

function MonthlyRank() {
  const data = [
    {
      id: 1,
      alt: "그룹 이미지 1",
      src: goldMedal,
      groupName: "그룹명 1",
      groupRate: "89%",
    },
    {
      id: 2,
      alt: "그룹 이미지 2",
      src: silverMedal,
      groupName: "그룹명 2",
      groupRate: "99%",
    },
    {
      id: 3,
      alt: "그룹 이미지 3",
      src: bronzeMedal,
      groupName: "그룹명 3",
      groupRate: "76%",
    },
  ];

  return (
    <div className="containerForMonthlyRanking">
      <div className="headForRanking">10월의 수익률 TOP3</div>
      <div className="headerForTitle">그룹별 / 2023.10.1-2023.10.31</div>
      <div className="medalList">
        <div className="silver">
          <img alt={data[1].alt} src={data[1].src} />
          <div> {data[1].groupName} </div>
          <div> 수익률: {data[1].groupRate} </div>
        </div>
        <div className="gold">
          <img alt={data[0].alt} src={data[0].src} />
          <div> {data[0].groupName} </div>
          <div> 수익률: {data[0].groupRate} </div>
        </div>
        <div className="bronze">
          <img alt={data[2].alt} src={data[2].src} />
          <div> {data[2].groupName} </div>
          <div> 수익률: {data[2].groupRate} </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyRank;
