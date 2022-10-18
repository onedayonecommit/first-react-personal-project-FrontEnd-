import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignupFetch, SignupIdFetch } from '../../redux/middlewares/Signup';

const Login = () => {
    const [values, setValues] = useState();
    const dispatch = useDispatch()
    // const idCheck = () => {
    //     console.log("HIi")
    //     dispatch(SignupIdFetch(values))
    // }
    const status = useSelector(state => {
        return state.idCheckStatus;
    })

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
            <button onClick={() => {
                dispatch(SignupIdFetch(values))
            }} >id중복확인</button>
            상태: {status}
            <button onClick={SignupFetch(values)} >찐 회원가입</button>
        </div>
    )
}

export default Login