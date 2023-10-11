import React from 'react';
import "./SelectButton.css";

function SelectButton({imgSrc, title, descript }) {
    return (
        <button className='SelectButton'>
            <img alt={title} src={imgSrc}></img>
            <h1>{title}</h1>
            <p style={{ whiteSpace: "pre-line" }}>{descript}</p>

        </button>
    );
}

export default SelectButton;
