import React, { useEffect } from 'react';
import createWave from './createWave.js'; // createWave 함수가 포함된 파일을 임포트합니다
import LibraryCardItem from './LibraryCardItem';

function LibraryCardWave() {
  const colors = [
    { low: rgb(0, 114, 255), high: rgb(48, 0, 255) },
    { low: rgb(236, 166, 15), high: rgb(233, 104, 0) },
    { low: rgb(43, 75, 235), high: rgb(213, 51, 248) },
    { low: rgb(175, 49, 49), high: rgb(123, 16, 16) }
  ];

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 WebGL 애니메이션을 생성합니다.
    createWave('.library-card', colors);
  }, []);

  function rgb(r, g, b) {
    return { x: r / 255, y: g / 255, z: b / 255 };
  }

  return (
    <LibraryCardItem />
  );
}

export default LibraryCardWave;

// LibraryCardItem.js의 내용과 같이 LibraryCardItem 컴포넌트를 정의합니다.
