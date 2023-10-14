import React from 'react';
import styles from "../styles/main-page.module.css";
import onceLayoutStyles from '../styles/once-layout.module.css';
import NewBox from "../new-box";
import InvestmentAppetiteBox from "../investment-appetite-box";
import StockBox from "../stock-box";

const OnceLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.child_container}>
                <section className={onceLayoutStyles.layout}>
                  <div className={onceLayoutStyles.left_layout}>
                    <StockBox className={onceLayoutStyles.once_short_box}/>
                    <NewBox className={onceLayoutStyles.once_short_box}/>
                  </div>
                  <InvestmentAppetiteBox/>
                </section>
            </div>
        </div>
    );
};

export default OnceLayout;
