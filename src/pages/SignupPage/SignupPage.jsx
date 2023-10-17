import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './SignUpPage.module.css';

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailType, setEmailType] = useState('naver.com'); // Default email type
    const [customEmail, setCustomEmail] = useState(''); // Custom email input
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSignUp = () => {
        // 이 부분에 회원가입 로직을 추가하세요.
        // 이름 (name), 이메일 (email + emailType 또는 customEmail), 비밀번호 (password) 정보를 사용하여 회원가입을 처리합니다.
        // 예: 서버에 POST 요청을 보내거나 다른 회원가입 처리 로직을 실행합니다.
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value !== 'custom') {
            setCustomEmail('');
        }
    }

    const handleCustomEmailChange = (e) => {
        setCustomEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordMatch(newPassword === confirmPassword);
    }

    const handleConfirmPasswordChange = (e) => {
        const newPassword = e.target.value;
        setConfirmPassword(newPassword);
        setPasswordMatch(password === newPassword);
    }

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
                    {email !== 'custom' && (
                        <select value={email} onChange={handleEmailChange}>
                            <option value="naver.com">naver.com</option>
                            <option value="nate.com">nate.com</option>
                            <option value="google.com">google.com</option>
                            <option value="custom">직접 입력</option>
                        </select>
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
