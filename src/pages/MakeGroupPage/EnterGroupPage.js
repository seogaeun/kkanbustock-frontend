import React from 'react';
import "./EnterGroupPage.css";
import TitleContentLayout from '../../components/ContentLayout/TitleContentLayout';
import SOL_search from './../../assets/images/SOL_search.png';
import GroupInput from '../../components/ContentLayout/GroupInput';

const componentContent ={imgSrc:SOL_search, inputTitle:"그룹 들어가기", inputDescript:"그룹 코드를 입력해주세요",buttonDescricpt:"시작하기"};

function EnterGroupPage() {
    return (
        <div className='EnterGroupPage-container'>
            <TitleContentLayout {...componentContent}>
                <GroupInput {...componentContent}></GroupInput>
            </TitleContentLayout>

        </div>
    );
}

export default EnterGroupPage;

