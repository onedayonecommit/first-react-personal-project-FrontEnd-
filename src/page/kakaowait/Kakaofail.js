import React from 'react'
import { useDispatch } from 'react-redux';
import { changeTicket } from '../../redux/reducer/BuyoptionSlice';

const Kakaofail = () => {
    const dispatch = useDispatch();
    dispatch(changeTicket(0));
    alert("결제에 실패하였습니다. 재 시도 바랍니다.")
    window.close()
    return (
        <div>Kakaofail</div>
    )
}

export default Kakaofail