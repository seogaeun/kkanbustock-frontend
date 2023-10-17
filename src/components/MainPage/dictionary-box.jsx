import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './styles/new-box.module.css';
import commonStyles from './styles/main-page.module.css';
import styles from './styles/dictionary-box.module.css';
import dicImg from '../../assets/images/SOL_Question.png';

const DictionaryBox = ({ className, dict }) => {
    const { id, word, explanation } = dict || {};

    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleCardClick = () => {
        // Redirect to the dictionary page when the card is clicked
        navigate('/Dictionary');
    }

    return (
        <div
            className={`${className ?? commonStyles.short_box} ${styles.container} ${isFlipped ? styles.flipped : ''}`}
            onMouseEnter={toggleFlip}
            onMouseLeave={toggleFlip}
            onClick={handleCardClick} // Add click event to navigate on card click
            style={{ cursor: 'pointer' }} // Change cursor to pointer
        >
            <section className={`${styles.side} ${styles.front}`}>
                <div className={styles.title}>
                    '{word ?? "주식"} '
                    <span className={styles.smallText}> 뜻?</span>
                </div>
            </section>
            <section className={`${styles.side} ${styles.back}`}>
                <div className={styles.content}>{explanation ?? "회사의 자본을 이루는 단위"}</div>
            </section>
            <section className={`${styles.image_box} ${styles.side} ${styles.front}`} >
                <div className={`${styles.short_box_image_box}`}>
                    <img className={`${styles.short_box_image}`} src={dicImg} alt="사전" />
                </div>
            </section>
        </div>
    );
};

export default DictionaryBox;
