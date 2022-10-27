import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCookie } from '../../../Cookies';
import PhonenumChangeFetch from '../../../redux/middlewares/NewPhonenumChangeFetch';
import "./Change.css"
const ChangePhonenum = () => {
    const [phonenum, setPhonenum] = useState();
    const dispatch = useDispatch();
    const cookie = getCookie("MY AT")
    return (
        <div>
            <div className='change-div'>
                <input placeholder='Phonenum' className='change-email-input' type="text" onChange={(e) => {
                    console.log(e.target.value)
                    setPhonenum(e.target.value)
                }} />
                <button className='change-text' onClick={() => {
                    phonenum != "" ? dispatch(PhonenumChangeFetch({
                        user_phone: phonenum,
                        accesstoken: cookie
                    })) : alert("빈 칸 입력바랍니다.")

                }}>변경</button>
            </div>
        </div>
    )
}

export default ChangePhonenum