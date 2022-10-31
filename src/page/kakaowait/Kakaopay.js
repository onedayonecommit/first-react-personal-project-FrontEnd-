import React from 'react'
import { Navigate } from 'react-router-dom';


const Kakaopay = () => {



    const param = new URLSearchParams(window.location.search).get("pg_token")
    const rmail = new URLSearchParams(window.location.search).get("id")
    const opnum = new URLSearchParams(window.location.search).get("opnum");

    // getpgtoken()
    // const pg_token = (state => state.BuyOption.pg_token)
    // const ticket_number = (state => state.BuyOption.imsee_ticket)
    // console.log(ticket_number)
    // (() => {
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