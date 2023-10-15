import React from 'react'
import StockBox2 from '../stock-box2';
import styles from "../styles/main-page.module.css";
import DictionaryBox from "../dictionary-box";
import NewBox from '../new-box';
import { padding } from '@mui/system';

function SecondTop() {
    return (
        <div className={styles.container}>
            <div className={styles.child_container}>
              <section className={styles.row_container}>
              <StockBox2 className={styles.flex_box} style={{ padding: '20px' }} />
                <NewBox/>
                <NewBox/>
                <NewBox/>
                <DictionaryBox/>
              </section>
            </div>
        </div>
    );
}

export default SecondTop
