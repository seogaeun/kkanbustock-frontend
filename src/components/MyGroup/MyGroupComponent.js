import React from 'react';
import "./MyGroupComponent.css";
import MyGroupItem from './MyGroupItem.js';
import BlueSmallBtn from '../ButtonComponent/BlueSmallBtn';
import BlueLargeBtn from '../ButtonComponent/BlueLargeBtn';

function MyGroupComponent() {
  // 깐부 데이터 객체 배열 정의
  const groupData = [
    { id: 1, grpname: "깐부1" },
    { id: 2, grpname: "깐부2" },
    { id: 3, grpname: "깐부3" },
    { id: 1, grpname: "깐부1" },
    { id: 2, grpname: "깐부2" },
    { id: 3, grpname: "깐부3" },
    { id: 1, grpname: "깐부1" },
    { id: 2, grpname: "깐부2" },
    { id: 3, grpname: "깐부3" },
    
  ];

  return (
    <div className='myGroupComponentWrap'>
        <div className='myGrpComponentTitle'>내 그룹</div>
      <div className="myGroupListSection">
        {/* 깐부 데이터 배열을 map() 함수로 반복하여 MyGroupItem을 생성 */}
        {groupData.map((group, index) => (
          <MyGroupItem key={group.id} groupName={group.grpname} />
        ))}
      </div>
      <BlueLargeBtn title="그룹 생성하기"></BlueLargeBtn>
    </div>
  );
}

export default MyGroupComponent;
