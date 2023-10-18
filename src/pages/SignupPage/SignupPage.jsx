import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './SignUpPage.module.css';
import axios from 'axios';

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [customEmail, setCustomEmail] = useState(''); // Custom email input
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSignUp = async () => {
        try {
            // 회원가입 정보를 서버로 보내는 요청 데이터 생성
            const userData = {
                account: name,
                name: name,
                email: email === 'custom' ? customEmail : email, // 수정된 부분
                password: password,
            };

            // POST 요청을 보내고 응답을 기다립니다.
            const response = await axios.post('/api/test/register', userData);

            // 서버로부터의 응답 처리
            console.log('회원가입 성공:', response.data);

            // 여기서 회원가입이 성공했을 때 사용자를 다른 페이지로 리디렉션할 수 있습니다.
            // 예: history.push('/login') 등을 사용하여 로그인 페이지로 이동
        } catch (error) {
            // 서버로부터의 응답에 오류가 있는 경우 처리
            console.error('회원가입 오류:', error.response.data);
            // 오류 처리 로직을 추가하세요.
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value !== 'custom') {
            setCustomEmail('');
        }
    };

    const handleCustomEmailChange = (e) => {
        setCustomEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newPassword = e.target.value;
        setConfirmPassword(newPassword);
        setPasswordMatch(password === newPassword);
    };

    return (
        <div className={styles.signUpPage}>
            <div className={styles.formContainer}>
                <Header name="SIGN UP" />
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        placeholder="이메일"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {email === 'custom' && (
                        <input
                            type="text"
                            placeholder="직접 입력"
                            value={customEmail}
                            onChange={handleCustomEmailChange}
                        />
                    )}
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    {!passwordMatch && <p className={styles.error}>비밀번호가 일치하지 않습니다.</p>}
                </div>
                <button onClick={handleSignUp}>회원가입</button>
            </div>
        </div>
    );
}

export default SignUpPage;