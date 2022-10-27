import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import PhonenumChangeFetch from '../../../redux/middlewares/NewPhonenumChangeFetch';

const ChangePhonenum = () => {
    const [phonenum, setPhonenum] = useState();
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" onChange={(e) => {
                console.log(e.target.value)
                setPhonenum(e.target.value)
                // dispatch(EmailChangeFetch(e.target.value))
            }} />
            <button onClick={() => {
                dispatch(PhonenumChangeFetch(phonenum))
            }}>변경</button>
        </div>
    )
}

export default ChangePhonenum