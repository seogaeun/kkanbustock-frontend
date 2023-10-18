import React from 'react';
import "./BlueLargeBtn.css";


function BlueLargeBtn({ title="클릭하기" , onclick}) {
    return (
        <div className='BlueLargeBtnWrap'>
            <button onClick={onclick} className='blueLargeBtn'>
                {title}
            </button>
        </div>
    );
}

export default BlueLargeBtn;
