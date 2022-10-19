import React from 'react'
import { Link } from 'react-router-dom'
import css from "./Signup.css"
const LoginBefore = () => {
    return (
        <div>
            <div className='flex justify-between w-screen h-20 items-center border-b-2 border-solid'>
                <Link to={"/"} className=""><img src={require("../../image/영화.png")} className="w-28 h-20 ml-20 mb-1"></img></Link>
                <div><Link to={"/welcome/login"} className="mx-20 text-xl font-bold">로그인</Link></div>
            </div>
        </div>
    )
}

export default LoginBefore