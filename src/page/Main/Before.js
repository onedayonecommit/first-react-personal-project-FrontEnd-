import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { MainIdCheckFetch } from '../../redux/middlewares/Mainidfetch';
import { checking, defSignupMainEamil } from '../../redux/reducer/MainidSlice';
const Before = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const statusNumber = useSelector(state => state.MainidCheck.status)

    useEffect(() => {
        console.log(statusNumber)
        switch (statusNumber) {
            case 0:
                navigate("/")
                break;
            case 1:
                navigate("/welcome/login")
                dispatch(checking({ statusNumber: 0 }))
                break;
            case 2:
                navigate("/welcome/signup")
                dispatch(checking({ statusNumber: 0 }))
                break;
            default:
                break;
        }
    }, [statusNumber])

    const signup_main_email = useSelector(state => state.MainidCheck.signup_main_email)
    const onChangeEmail = (e) => {
        dispatch(defSignupMainEamil(e.target.value))
    }

    return (
        <div>
            <div className='main_body'>
                <main>
                    <div className="top-bar">
                        <div className="logo"><img src={require("../../image/영화.png")} alt="netflix" /></div>
                        <div className="buttons">
                            <select name="Language" id="lang">
                                <option value="portuguese">한국어</option>
                                <option value="english">English</option>
                            </select>
                            <Link to="/welcome/login">로그인</Link>
                        </div>
                    </div>
                    <div className="sing-in">
                        <h1>Poobin의 영화를 한눈에</h1>
                        <h2>가입하고 돈부터 내세요</h2>

                        <h3>그럼 감상 가능합니다.
                        </h3>
                        <label>
                            <input type="email" placeholder="Email" className='text-gray-900' name='MainEmail' onChange={onChangeEmail} />
                            {/* <input type="button" value="시작하기" /> */}
                            <button className='start-btn' onClick={() => {
                                dispatch(MainIdCheckFetch({ user_email: signup_main_email }))
                            }}>시작하기</button>
                        </label>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Before