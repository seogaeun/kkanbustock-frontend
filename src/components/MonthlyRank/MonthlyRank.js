import React from "react";
import "./MonthlyRank.css"; // CSS 파일을 import
import RankingCard from "../RankingCard/RankingCard";
import goldMedal from "../../assets/images/medal/gold.png";
import silverMedal from "../../assets/images/medal/silver.png";
import bronzeMedal from "../../assets/images/medal/dong.png";

function MonthlyRank() {
  // 데이터 리스트를 만듭니다.
  const data = [
    {
      id: 1,
      alt: "그룹 이미지 1",
      src: goldMedal,
      groupName: "그룹명 1",
      groupRate: "수익률 1",
    },
    {
      id: 2,
      alt: "그룹 이미지 2",
      src: silverMedal,
      groupName: "그룹명 2",
      groupRate: "수익률 2",
    },
    {
      id: 3,
      alt: "그룹 이미지 3",
      src: bronzeMedal,
      groupName: "그룹명 3",
      groupRate: "수익률 3",
    },
  ];

  // 첫 번째 데이터를 추출합니다.
  const gold = data[0];
  const silver = data[1];
  const bronze = data[2];

  return (
    <div className="containerForMonthlyRanking">
      <div className="headForRanking">10월의 수익률 TOP3</div>
      <div className="headerForTitle">그룹별 / 2023.10.1-2023.10.31</div>
      <div className="medalList">
        <div className="silver">
          <RankingCard
            alt={silver.alt}
            src={silver.src}
            groupName={silver.groupName}
            groupRate={silver.groupRate}
          />
        </div>
        <div className="gold">
          <RankingCard
            alt={gold.alt}
            src={gold.src}
            groupName={gold.groupName}
            groupRate={gold.groupRate}
          />
        </div>
        <div className="bronze">
          <RankingCard
            alt={bronze.alt}
            src={bronze.src}
            groupName={bronze.groupName}
            groupRate={bronze.groupRate}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthlyRank;
