import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/reducer/LoginSlice';

const After = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                console.log("눌리는중")
                dispatch(logout())
            }}>hihi</button>
        </div>
    )
}

export default After