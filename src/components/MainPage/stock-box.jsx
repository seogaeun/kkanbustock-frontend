import React from 'react';
import commonStyles from './styles/main-page.module.css';
import styles from './styles/stock-box.module.css'
import stockImage from '../../assets/images/MOLY_plant.png';

const StockBox = ({className, stock}) => {

    const title = stock[0].itmsNm;
    const price = stock[0].clpr;
    const detail = stock[0].vs;
    const content = stock[0].content;
    console.log("제발",stock)
    return (
        <div className={`${className ?? commonStyles.short_box} ${styles.container}`}>
            <section>
                <div className={styles.title}>
                  오늘의 종목
                </div>
                <div className={styles.header}>
                    <div>
                      {title ?? "현대차"}
                    </div>
                    <div>
                      {price ?? "213,000"}
                    </div>
                </div>

                <div className={styles.detail}>
                  {detail ?? 500}
                </div>
            </section>

            <section className={styles.content}>
              {content ?? "대한민국 최고의 자동차 회사! 산업군 설명 설명 종목 간단 개요 개요"}
            </section>

            <section className={styles.image_box}>
                <div className={`${styles.short_box_image_box}`}>
                    <img className={`${styles.short_box_image}`} src={stockImage} alt={"사전"}/>
                </div>
            </section>
        </div>
    );
};

export default StockBox;
