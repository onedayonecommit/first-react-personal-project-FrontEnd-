import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../redux/reducer/Signup';

const Login = () => {
    const [values, setValues] = useState();
    const dispatch = useDispatch()
    const login = () => {
        dispatch(signup(values))
    }
    const onChangeId = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value,
        })
        console.log(values)
    }
    return (
        <div>
            <input name='IdInput' placeholder='이메일 또는 전화번호' onChange={onChangeId} />
            <input name='PwInput' placeholder='비밀번호' onChange={onChangeId} />
            <button onClick={login}>로그인 로그인</button>
        </div>
    )
}

export default Login