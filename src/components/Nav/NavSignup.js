import React from 'react'
import { Link } from 'react-router-dom'
const NavSignup = () => {
    return (
        <div><ul className='flex '>
            <li className='ml-8'><Link to={"/welcome/login"}>로그인</Link></li>
            <li className='ml-8'><Link to={"/welcome/signup"}>회원가입</Link></li>
        </ul></div>
    )
}

export default NavSignup