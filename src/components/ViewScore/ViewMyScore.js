import React, { useState, useEffect } from 'react';
import "./ViewMyScore.css";
import ViewScoreInfo from './ViewScoreInfo';
import SOL_GO from "./../../assets/images/SOL_GO.png";
import axios from 'axios';
const data="확인 불가";
function ViewMyScore({ memberId }) {
    const [totalProfitRate, setTotalProfitRate] = useState(null);

    useEffect(() => {
        axios.get(`/api/v1/portfolios/profits/${memberId}`)
            .then((response) => {
                const data = response.data;
                console.log(data)
                if (data) {
                    setTotalProfitRate(data); // 응답 데이터를 할당
                } else {
                    setTotalProfitRate("확인 불가");
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setTotalProfitRate("확인 불가");
            });
    }, [memberId]);

    return (
        <div className='componentWrap'>
            <div className='mySadariggol'>
                <div className='myScoreInfo'>
                    <ViewScoreInfo who="ME" nickname={memberId} totalProfitRate={totalProfitRate} /> {/* totalProfitRate를 사용 */}
                </div>
                <img alt="SOL" src={SOL_GO} />
            </div>
        </div>
    );
}


export default ViewMyScore;
