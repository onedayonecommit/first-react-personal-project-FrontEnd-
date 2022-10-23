import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import KakaoFinalFetch from '../../redux/middlewares/KakaoFinalFetch';
import { changePgToken, changeTicket } from '../../redux/reducer/BuyoptionSlice';


const Kakaopay = () => {
    const dispatch = useDispatch();


    const param = new URLSearchParams(window.location.search).get("pg_token")
    const usermail = new URLSearchParams(window.location.search).get("id")
    const opnum = new URLSearchParams(window.location.search).get("opnum");

    // getpgtoken()
    // const pg_token = useSelector(state => state.BuyOption.pg_token)
    // const ticket_number = useSelector(state => state.BuyOption.imsee_ticket)
    // console.log(ticket_number)
    // useEffect(() => {
    //     console.log(pg_token)
    // })

    return (
        <div>
            <button onClick={() => {
                dispatch(KakaoFinalFetch({ user_email: usermail, user_ticket: opnum }))
            }}>결제 완료하기</button>
        </div>
    )
}

export default Kakaopay