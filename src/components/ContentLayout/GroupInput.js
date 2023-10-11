import {useState,React} from 'react';
import "./GroupInput.css";




function GroupInput({imgSrc, inputTitle, inputDescript,buttonDescricpt }) {

    //글자 입력시 바로바로 인식하는 함수
    const [text, setText] = useState("");
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }

    return (
        <div className='componentWrap'>
            <div className="inputsection">
                <h1>{inputTitle}</h1>
                <div className="inputContent">
                    <input placeholder={inputDescript} value={text} onChange={handleOnChange}></input>
                    <button>{buttonDescricpt}</button>
                </div>
            </div>
        </div>
    );
}

export default GroupInput;
