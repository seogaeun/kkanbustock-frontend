import React from 'react';
import "./SelectPage.css";
import SelectButton from '../../components/SelectButton/SelectButton';
import SOL_search from './../../assets/images/SOL_search.png';
import LL_together from './../../assets/images/LL_together.png'

const button1 ={imgSrc:SOL_search, title:"그룹 들어가기", descript: "그룹 코드 입력을 통해\n그룹에 참여할 수 있습니다"};
const button2 ={imgSrc:LL_together, title:"그룹 만들기", descript:"새로 그룹을 생성할 수 있습니다"};

function SelectPage() {
    return (
        <div className='center-container'>
            <div className='selectionContainer'>
                <SelectButton {...button1} />
                <SelectButton {...button2} />

            </div>
        </div>
    );
}

export default SelectPage;

