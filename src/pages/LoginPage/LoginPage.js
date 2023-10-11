import React, { useState, useEffect } from 'react';
import './Login.css'
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
 
    return(
        <div>
            <h2>LOGIN</h2>
            <div>
            <div>
                <input className='input_group' placeholder='ID' type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <input className='input_group' placeholder='비밀번호' type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            </div>
            <div  id='button_group'>
                <div>
                    <button className='button' type='button' onClick={onClickLogin}>로그인</button>
                </div>
                <div>
                    <button className='button' type='button' onClick={onClickLogin}>회원가입</button>
                </div>
                <div>
                    <label id="explanation">로그인없이 들어갈 수 있어요 </label>
                    <label id="guestLogin">구경하기{'>'} </label>
                </div>
            </div>
        </div>
    )
}
 
export default Login;