import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCookie } from '../../../Cookies';
import ChangePwFetch from '../../../redux/middlewares/NewPwChangeFetch';
import "./Change.css"
const ChangePw = () => {
    const cookie = getCookie("MY AT")
    const dispatch = useDispatch();
    const [password, setPassword] = useState({
        password: "",
        passwordcheck: ""
    })
    return (
        <div>
            <div className='change-div'>
                <input placeholder='비밀번호' className='change-email-input pw-input' type="password" onChange={(e) => {
                    console.log(e.target.value)
                    setPassword(password.password = e.target.value)
                }} />
                <input placeholder='비밀번호 확인' className='change-email-input' type="password" onChange={(e) => {
                    console.log(e.target.value)
                    setPassword(password.passwordcheck = e.target.value)
                }} />
                <button className='change-text' onClick={() => {
                    if (password.password == password.passwordcheck && password.password != "") {
                        dispatch(ChangePwFetch({
                            user_pw: password,
                            accesstoken: cookie
                        }))
                    }
                    else {
                        alert("두 비밀번호가 일치하지 않습니다. 재 입력 바랍니다.")
                    }

                }}>변경</button>
            </div>
        </div>
    )
}

export default ChangePw