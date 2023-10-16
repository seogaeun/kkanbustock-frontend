import React from 'react';
import "./BlueSmallBtn.css";
import { Link } from 'react-router-dom'; 


function BlueSmallBtn({ title, link }) {
    return (
        <Link to={link} className="link-style">
            <div className='componentWrap'>
                <button onclick={onclick} className='blueSmallBtn'>
                    {title}
                </button>
            </div>
        </Link>

    );
}

export default BlueSmallBtn;

