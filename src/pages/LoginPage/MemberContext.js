import React, { createContext, useContext, useState } from 'react';

const MemberContext = createContext();

export function MemberProvider({ children }) {
  const [id, setId] = useState(''); // 초기값은 빈 문자열로 설정

  return (
    <MemberContext.Provider value={{ id, setId }}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMemberId() {
  return useContext(MemberContext);
}

export default MemberProvider;