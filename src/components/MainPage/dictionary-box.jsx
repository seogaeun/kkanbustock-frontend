// DictionaryBox.jsx

import React, { useState } from 'react';
import style from './styles/new-box.module.css';
import commonStyles from './styles/main-page.module.css';
import styles from "./styles/dictionary-box.module.css";
import dicImg from '../../assets/images/SOL_Question.png';

const DictionaryBox = ({ className, dict }) => {
    const { id, word, explanation } = dict || {};

    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`${className ?? commonStyles.short_box} ${styles.container} ${isFlipped ? styles.flipped : ''}`} onMouseEnter={toggleFlip} onMouseLeave={toggleFlip}>
            <section className={`${styles.side} ${styles.front}`}>
                <div className={styles.title}>
                    {word ?? "주식이란?"}
                    <span className={styles.smallText}> 의 뜻을 <br /> 아시나요?</span>
                </div>
            </section>
            <section className={`${styles.side} ${styles.back}`}>
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
