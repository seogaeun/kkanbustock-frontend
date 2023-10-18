import React, { useEffect, useState } from 'react';
import styles from '../styles/main-page.module.css';
import onceLayoutStyles from '../styles/once-layout.module.css';
import NewsBox from '../news-box';
import InvestmentAppetiteBox from '../investment-appetite-box';
import StockBox from '../stock-box';
import axios from 'axios';

const OnceLayout = () => {
  // 주식 정보를 저장할 상태
  const [stockData, setStockData] = useState(null);

  // API에서 주식 정보 가져오기
  const fetchStockRecommendations = async () => {
    try {
      const size = 1;

      const response = await axios.get("/api/v1/recommends", {
        params: {
          page: 0,
          size: size,
        },
      });
      const stockData = response.data.content;
      console.log("주식 데이터 수신:", stockData);
      setStockData(stockData); // 상태 업데이트로 데이터 저장
    } catch (error) {
      console.error("주식 데이터 가져오기 실패", error);
    }
  };

  // 컴포넌트가 마운트될 때 주식 정보 가져오기
  useEffect(() => {
    fetchStockRecommendations();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.child_container}>
        <section className={onceLayoutStyles.layout}>
          <div className={onceLayoutStyles.left_layout}>
            <NewsBox className={onceLayoutStyles.once_short_box} />
            <StockBox
              className={onceLayoutStyles.once_short_box}
              stock={stockData} // 주식 정보를 StockBox 컴포넌트로 전달
            />
          </div>
          <InvestmentAppetiteBox />
        </section>
      </div>
    </div>
  );
};

export default OnceLayout;
