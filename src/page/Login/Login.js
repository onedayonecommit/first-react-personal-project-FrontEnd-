import React from 'react'
import { Link } from 'react-router-dom'
import css from './Login.css'
const Login = () => {
    return (

        <div className='Signupbody'>
            <Link className="logo" to="/#"><img src={require("../../image/영화.png")} /></Link>
            <div className="login">
                <h1 className="login__title">로그인</h1>
                <div className="login__group">
                    <input className="login__group__input" type="text" placeholder='Email or phone number' />
                </div>
                <div className="login__group">
                    <input className="login__group__input" type="password" placeholder='password' />
                </div>
                <button className="login__sign-in" type="button">Sign In</button>
                <div className="login__secondary-cta"><Link className="login__secondary-cta__text" to="#">아이디/비밀번호 찾기</Link><Link className="login__secondary-cta__text login__secondary-cta__text--need-help" to="/welcome/signup">Sign up</Link></div>
            </div>
        </div>
    )
}

export default Login