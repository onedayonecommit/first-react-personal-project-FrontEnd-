import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ChangePwFetch from '../../../redux/middlewares/Newmiddleware/NewPwChangeFetch';

const ChangePw = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState({
        password: "",
        passwordcheck: ""
    })
    return (
        <div>
            <input type="password" onChange={(e) => {
                console.log(e.target.value)
                setPassword(password.password = e.target.value)
            }} />
            <input type="password" onChange={(e) => {
                console.log(e.target.value)
                setPassword(password.passwordcheck = e.target.value)
            }} />
            <button onClick={() => {
                dispatch(ChangePwFetch(password))
            }}>변경</button></div>
    )
}

export default ChangePw