import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div className='navbar'>
                <div id='logo'>
                    로고
                </div>
                <div className='menuClass'>
                    <Link className='navbarMenu' to={'/'}>메인</Link>
                    <Link className='navbarMenu' to={'/'}>라이벌</Link>
                    <Link className='navbarMenu' to={'/'}>사전</Link>
                    <Link className='navbarMenu' to={'/'}>퀴즈</Link>
                    <Link className='navbarMenu' to={'/'}>내정보</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
