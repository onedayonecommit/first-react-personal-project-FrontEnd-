import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LoginFetch } from '../../redux/middlewares/Loginfetch';
import css from './Login.css'
const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [values, setValues] = useState({});
    const loging = useSelector(state => state.Login.loging)

    const onChangeId = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value,
        })
        console.log(values)
    }

    useEffect(() => {
        console.log(loging)
        if (loging == true) {
            navigate("/");
        }
    }, [loging]);

    return (
        <div className='Signupbody' >
            <Link className="logo" to="/#"><img src={require("../../image/영화.png")} /></Link>
            <div className="login">
                <h1 className="login__title">로그인</h1>
                <div className="login__group">
                    <input className="login__group__input" type="text" placeholder='Email or phone number' name='loginIdInput' onChange={onChangeId} />
                </div>
                <div className="login__group">
                    <input className="login__group__input" type="password" placeholder='password' name='loginPwInput' onChange={onChangeId} />
                </div>
                <button className="login__sign-in" type="button" onClick={() => {
                    console.log("hi")
                    dispatch(LoginFetch(values))
                }}>Welcome</button>
                <div className="login__secondary-cta"><Link className="login__secondary-cta__text" to="#">아이디/비밀번호 찾기</Link><Link className="login__secondary-cta__text login__secondary-cta__text--need-help" to="/welcome/signup">Sign up</Link></div>
            </div>
        </div >
    )
}

export default Login