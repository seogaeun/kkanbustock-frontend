import React from 'react';
import commonStyles from './styles/main-page.module.css';
import InvestTestBox from './invest-test-box';

const InvestmentAppetiteBox = () => {
  return (
      <div className={commonStyles.two_by_two_box}>
        <InvestTestBox></InvestTestBox>
      </div>
  );
};

export default InvestmentAppetiteBox;
