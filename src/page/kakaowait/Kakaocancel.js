import React from 'react'
import { useDispatch } from 'react-redux';
import { changeTicket } from '../../redux/reducer/BuyoptionSlice';

const Kakaocancel = () => {
    const dispatch = useDispatch();
    dispatch(changeTicket(0));
    alert("결제 취소 하였습니다. 재 결제 희망시 결제 재 시도 바랍니다.")
    window.close()
    return (
        <div>Kakaocancel</div>
    )
}

export default Kakaocancel