import React from 'react';
import "./BlueSmallBtn.css";


function BlueSmallBtn({ title }) {
    return (
        <div className='componentWrap'>
            <button className='blueSmallBtn'>
                {title}
            </button>
        </div>
    );
}

export default BlueSmallBtn;

