import React from 'react';
import commonStyles from './styles/main-page.module.css';
import styles from './styles/stock-box.module.css'
import styles2 from './styles/stock_box2.module.css'
import stockImage from '../../assets/images/quiz1.png';

const StockBox2 = ({ className, stockData}) => {
    console.log("아 제발,",stockData);

    const title = stockData.itmsNm || "현대차";
    const price = stockData.clpr || "213,000";
    const detail = stockData.vs || 0;
    const content = stockData.content || "대한민국 최고의 자동차 회사! 산업군 설명 설명 종목 간단 개요 개요";
    return (
        <div className={`${className ?? commonStyles.flex_box} ${styles2.container2}`}>
            <div className={styles2.title2}>
                오늘의 종목
            </div>
            <div className={styles2.header2}>
                <div className={styles2.title}>{title}</div>
                <div className={styles2.price}>{price}</div>
            </div>

            <div className={styles2.detail2}>
                {detail}
            </div>

            <div className={styles2.content2}>
                {content}
            </div>

            <div className={styles2.image_box2}>
                <img className={styles2.short_box_image2} src={stockImage} alt={"사전"} />
            </div>
        </div>
    );
};

export default StockBox2;
