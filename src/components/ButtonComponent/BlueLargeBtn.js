import React from 'react';
import "./BlueLargeBtn.css";


function BlueLargeBtn({ title="클릭하기" }) {
    return (
        <div className='componentWrap'>
            <button className='blueLargeBtn'>
                {title}
            </button>
        </div>
    );
}

export default BlueLargeBtn;
