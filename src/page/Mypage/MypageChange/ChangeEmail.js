import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import EmailChangeFetch from '../../../redux/middlewares/Newmiddleware/NewEmailChangeFetch';
import "./Change.css"

const ChangeEmail = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    return (
        <div>
            <input type="text" onChange={(e) => {
                console.log(e.target.value)
                setEmail(e.target.value)
                console.log(email)
            }} />
            <button onClick={() => {
                dispatch(EmailChangeFetch(email))
            }}><h1 className='change-text'>변경</h1></button>
        </div>
    )
}

export default ChangeEmail