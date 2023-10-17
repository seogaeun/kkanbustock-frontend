import React from 'react';
import style from './styles/new-box.module.css';
import commonStyles from './styles/main-page.module.css';
import styles from "./styles/dictionary-box.module.css";
import dicImg from '../../assets/images/SOL_search.png';

const DictionaryBox = ({ className, dict }) => {
    const { id, word, explanation } = dict || {};


    return (
        <div className={`${className ?? commonStyles.short_box} ${styles.container}`}>
            <section className={styles.header}>
                <div className={styles.title}>{word ?? "주식"}</div>
                <div className={styles.content}>{explanation ?? "회사의 자본을 이루는 단위"}</div>
            </section>
            <section className={styles.image_box}>
                <div className={`${styles.short_box_image_box}`}>
                    <img className={`${styles.short_box_image}`} src={dicImg} alt={"사전"} />
                </div>
            </section>
        </div>
    );
};

export default DictionaryBox;
