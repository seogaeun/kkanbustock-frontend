import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './LoginPage.css';
import axios from 'axios'; 
function Login() {

    const fetch = () => {
        return axios.create({
            baseURL: 'http://localhost:8080',
            headers: {
            'accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            //authorization: `Bearer ${token}`,
        }
        })
    }

    
    const [id, setInputId] = useState('');
    const [password, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }


    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickLogin = async () => {
        try {
            // 로그인 정보를 서버로 보내는 요청 데이터 생성
            const loginData = {
                id: id,
                password: password,
            };
            console.log(loginData);
    
    
            // POST 요청을 보내고 응답을 기다립니다.
            const response = await fetch().post('/api/v1/login', {
                params: loginData, // GET 요청에 데이터를 params로 전달
                withCredentials: true
            });
    
            // 서버로부터의 응답 처리
            console.log('로그인 성공:', response.data);
    
            // 로그인이 성공했을 때 원하는 작업을 수행할 수 있습니다.
        } catch (error) {
            // 서버로부터의 응답에 오류가 있는 경우 처리
            console.error('로그인 오류:', error.response.data);
            // 오류 처리 로직을 추가하세요.
        }
    };
    
    

    useEffect(() => {
        // 페이지 호출 후 처음 한 번만 호출될 수 있도록 [] 추가
    }, []);

    return (
        <div>
            <Header name='LOGIN' />
            <div>
                <div>
                    <input className='input_group' placeholder='ID' type='text' name='input_id' value={id} onChange={handleInputId} />
                </div>
                <div>
                    <input className='input_group' placeholder='비밀번호' type='password' name='input_pw' value={password} onChange={handleInputPw} />
                </div>
            </div>
            <div id='button_group'>
                <div>
                    <button className='button' type='button' onClick={onClickLogin}>로그인</button>
                </div>
                <div>
                    <button className='button' type='button' onClick={onClickLogin}>회원가입</button>
                </div>
                <div>
                    <label id="explanation">로그인없이 들어갈 수 있어요</label>
                    <label id="guestLogin">구경하기{'>'}</label>
                </div>
            </div>
        </div>
    )
}

export default Login;
