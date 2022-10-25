import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Searchglass } from '../../components';
import { SignupFetch, SignupIdFetch } from '../../redux/middlewares/Signupfetch';



const Signup = () => {
    const user_id = useSelector(state => state.MainidCheck.user_id)
    const [values, setValues] = useState();
    const dispatch = useDispatch()
    // const idCheck = () => {
    //     console.log("HIi")
    //     dispatch(SignupIdFetch(values))
    // }
    const status = useSelector(state => state.idCheck.idCheckStatus
    )
    const using = useSelector(state => state.idCheck.using)
    const useid = useSelector(state => state.idCheck.user_id)
    const afterSignup = () => {
        using == true ? dispatch(SignupFetch(values)) : alert("중복 검사 먼저 하시오.")
    }
    const onChangeId = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value,
        })
        console.log(values)
    }
    return (
        <div className='signup-body'>
            <Nav />
            <Searchglass />
            <input name='IdInput' placeholder='이메일 또는 전화번호' onChange={onChangeId} value={user_id} />
            <input name='PwInput' placeholder='비밀번호' onChange={onChangeId} />
            <button onClick={() => {
                dispatch(SignupIdFetch(values))
            }} >id중복확인</button>
            상태: {status}
            <button onClick={afterSignup} className="bg-slate-500 rounded-xl px-2 text-white">찐 회원가입</button>
            123{useid}
        </div>
    )
}

export default Signup