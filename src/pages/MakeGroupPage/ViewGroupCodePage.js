import React from 'react';
import "./ViewGroupCodePage.css";
import TitleContentLayout from '../../components/ContentLayout/TitleContentLayout';
import GroupInput from '../../components/ContentLayout/GroupInput';
import LL_together from '../../assets/images/LL_together.png'

const componentContent ={imgSrc:LL_together, title:"그룹 생성 완료",inputTitle:"그룹 생성하기", inputDescript:"그룹 이름을 지어주세요",buttonDescricpt:"그룹 생성하기"};
let userName="게스트";
const groupCode="12345"

function CreateGroupPage() {
    return (
        <div className='center-container'>
            <TitleContentLayout {...componentContent}>
                <div className='informCodeContent'>
                    <h3>{userName}님의 그룹 코드는</h3>
                    <h3  className='groupCode'><span>{groupCode}</span>입니다.</h3>
                    <p>그룹 코드를 통해 친구를 초대해보세요 <a className="copyLink" herf="#">클립보드로 복사하기</a></p>
                </div>
            </TitleContentLayout>

        </div>
    );
}

export default CreateGroupPage;

