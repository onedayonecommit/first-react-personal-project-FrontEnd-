import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { mainlogo, poobinlogo2 } from '../../image';
import { LoginFetch } from '../../redux/middlewares/Loginfetch';
import { changePw, checking, defUserId } from '../../redux/reducer/MainidSlice';
import css from './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loging = useSelector(state => state.Login.loging)
    const onChangeId = (e) => {
        dispatch(defUserId(e.target.value))
    }
    const onChangePw = (e) => {
        dispatch(changePw(e.target.value))
    }
    const user_id = useSelector(state => state.MainidCheck.login_user_email)
    const user_pw = useSelector(state => state.MainidCheck.user_pw)
    useEffect(() => {
        console.log(loging)
        if (loging == true) {
            navigate("/");
        }
    }, [loging]);
    console.log(user_id)
    return (
        <div className='Signupbody' >
            <Link className="logo" to="/#"><img src={mainlogo} /></Link>
            <div className="login">
                <h1 className="login__title">로그인</h1>
                <div className="login__group">
                    <input className="login__group__input" type="text" placeholder='Email or phone number' name='loginIdInput' onChange={onChangeId} value={user_id}
                    // onKeyUp={() => {
                    //     dispatch(checking({ login_user_email: values.loginIdInput }))
                    // }}
                    />
                </div>
                <div className="login__group">
                    <input className="login__group__input" type="password" placeholder='password' name='loginPwInput' onChange={onChangePw} />
                </div>
                <button className="login__sign-in" type="button"
                    onClick={() => {
                        console.log("hi")
                        dispatch(LoginFetch({ user_id: user_id, user_pw: user_pw }))
                    }}
                >Welcome</button>
                <div className="login__secondary-cta"><Link className="login__secondary-cta__text" to="#">아이디/비밀번호 찾기</Link><Link className="login__secondary-cta__text login__secondary-cta__text--need-help" to="/welcome/signup">Sign up</Link></div>
            </div>
        </div >
    )
}

export default Login