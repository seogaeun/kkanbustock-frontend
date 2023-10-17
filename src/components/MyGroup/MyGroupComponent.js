import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./MyGroupComponent.css";
import MyGroupItem from './MyGroupItem.js';
import BlueSmallBtn from '../ButtonComponent/BlueSmallBtn';
import BlueLargeBtn from '../ButtonComponent/BlueLargeBtn';

function MyGroupComponent() {
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    // API 호출
    axios.get('/api/v1/groups/proposal')
      .then(response => {
        setGroupData(response.data); // API 응답 데이터를 state에 설정
      })
      .catch(error => {
        console.error('API 호출 중 오류 발생:', error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 호출

  return (
    <div className='myGroupComponentWrap'>
      <div className='myGrpComponentTitle'>내 그룹</div>
      <div className="myGroupListSection">
        {/* API에서 받아온 데이터를 map() 함수로 반복하여 MyGroupItem을 생성 */}
        {groupData.map((group, index) => (
          <MyGroupItem key={index} groupName={group.name} />
        ))}
      </div>
      <BlueLargeBtn title="그룹 생성하기"></BlueLargeBtn>
    </div>
  );
}

export default MyGroupComponent;
