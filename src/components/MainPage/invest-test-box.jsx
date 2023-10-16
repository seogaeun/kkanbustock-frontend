import React from 'react';
import styles from './styles/invest-test-box.module.css';
import commonStyles from './styles/main-page.module.css';
import SOL_Question from './../../assets/images/SOL_Question.png'



const InvestTestBox = ({className}) => {
    return (
        <div className="parentSize">
            <div className={styles.investTestWrap}>
                <div className={styles.textContent}>
                    <div className={styles.mainQuestion}>
                        경기 침체로 인해, 투자 시장이 좋지만은 않은데..!
                    </div>
                    <div className={styles.yourChoice}>
                        당신의 선택은?
                    </div>
                </div>
                <div className={styles.chooseContent}>
                    <div className={styles.choose1}>
                        <div className={styles.chooseText}>
                            이럴 때 더 공격적으로!!
                        </div>

                    </div>
                    <div className={styles.versus}>
                        vs
                    </div>
                    <div className={styles.choose2}>
                        <div className={styles.chooseText}>
                            더 떨어지기 전에 나오자!!
                        </div>

                    </div>
                </div>
                <div className={styles.joinContent}>
                    <img className={styles.solImg} alt={SOL_Question} src={SOL_Question}>
                    </img>
                    <button className={styles.letsGoBtn}>
                        지금 쏠과 함께 투자성향 테스트 하러 가기 {`>`}
                    </button>
                </div>
            </div>
        </div>

    );
};

export default InvestTestBox;
