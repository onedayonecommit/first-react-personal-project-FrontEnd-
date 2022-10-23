import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { changePgToken, changeTicket } from '../../redux/reducer/BuyoptionSlice';


const Kakaopay = () => {
    // const dispatch = useDispatch();
    // const nav = useNavigate();
    // const getpgtoken = () => {
    //     const param = new URLSearchParams(window.location.search).get("pg_token")
    //     dispatch(changePgToken(param))
    // }
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
            }}>결제 완료하기</button>
        </div>
    )
}

export default Kakaopay