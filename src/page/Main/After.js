import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const After = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const statusNumber = useSelector(state => state.MainidCheck.status)

    useEffect(() => {
        console.log(statusNumber)
        switch (statusNumber) {
            case 0:
                navigate("/")
                break;
            case 1:
                navigate("/welcome/login")
                break;
            case 2:
                navigate("/welcome/signup")
                break;
            default:
                break;
        }
    }, [statusNumber])
    return (
        <div>

        </div>
    )
}

export default After