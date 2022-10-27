import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NicknameChangeFetch from '../../../redux/middlewares/NewNicknameChangeFetch';

const ChangeNick = () => {
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) => {
                console.log(e.target.value)
                setNickname(e.target.value)
                // dispatch(EmailChangeFetch(e.target.value))
            }} />
            <button onClick={() => {
                dispatch(NicknameChangeFetch(nickname))
            }}>변경</button>
        </div>
    )
}

export default ChangeNick