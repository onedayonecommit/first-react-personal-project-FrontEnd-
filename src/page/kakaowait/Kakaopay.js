import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { changePgToken } from '../../redux/reducer/BuyoptionSlice';


const Kakaopay = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const getpgtoken = () => {
        const param = new URLSearchParams(window.location.search).get("pg_token")
        dispatch(changePgToken(param))
    }
    getpgtoken()
    const pg_token = useSelector(state => state.BuyOption.pg_token)
    console.log(pg_token)
    useEffect(() => {
        nav('/')
    })

    return (
        <div>Kakaopay</div>
    )
}

export default Kakaopay