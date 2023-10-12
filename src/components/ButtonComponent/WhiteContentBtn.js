import React from 'react';
import "./WhiteContentBtn.css";
import BlueSmallBtn from './BlueSmallBtn';

function WhiteContentBtn({ children }) {
    return (
        <div className='componentWrap'>
            <button className='whiteContentBtn'>
                {children}
            </button>
        </div>
    );
}

export default WhiteContentBtn;
