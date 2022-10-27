import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCookie } from '../../../Cookies';
import EmailChangeFetch from '../../../redux/middlewares/NewEmailChangeFetch';
import "./Change.css"

const ChangeEmail = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const cookie = getCookie("MY AT")
    return (
        <div>
            <div className='change-div'>
                <input placeholder='Email' className='change-email-input' type="text" onChange={(e) => {
                    console.log(e.target.value)
                    setEmail(e.target.value)
                }} />
                <button onClick={() => {
                    email !== "" ? dispatch(EmailChangeFetch({ user_email: email, accesstoken: cookie })) : alert("변경할 값을 입력하세요")
                }}>변경</button>
            </div>
        </div>
    )
}

export default ChangeEmail