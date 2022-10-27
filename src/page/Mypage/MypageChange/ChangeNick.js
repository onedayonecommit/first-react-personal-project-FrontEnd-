import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCookie } from '../../../Cookies';
import NicknameChangeFetch from '../../../redux/middlewares/NewNicknameChangeFetch';
import "./Change.css"
const ChangeNick = () => {
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState("");
    const cookie = getCookie("MY AT")
    return (
        <div>
            <div className='change-div'>
                <input placeholder='Nickname' className='change-email-input' type="text" onChange={(e) => {
                    console.log(e.target.value)
                    setNickname(e.target.value)
                }} />
                <button className='change-text' onClick={() => {
                    nickname != "" ? dispatch(NicknameChangeFetch({ user_nickname: nickname, accesstoken: cookie })) : alert("빈칸 입력바랍니다.")

                }}>변경</button>
            </div>
        </div>
    )
}

export default ChangeNick