import React from 'react'
import { Link } from 'react-router-dom'
import css from "./Login.css"
const LoginBefore = () => {
    return (<div>
        <div className='flex justify-between w-screen h-20 items-center border-b-2 border-solid'>
            <Link to={"/"} className=""><img src={require("../../image/영화.png")} className="w-28 h-20 ml-20 mb-1"></img></Link>
            <div><Link to={"/welcome/login"} className="mx-20 text-xl font-bold">로그인</Link></div>
        </div>
        <div className='flex'>
            <span className='loggo-span w-full h-full mt-32'></span>
        </div>
        <div className='flex flex-col items-center '>
            <span className='mt-4'>1/3단계</span>
            <div className='text-center w-80 text-4xl font-bold mt-2'><h1>가입 마무리 하기.</h1></div>
            <div className='text-center w-80 text-xl mt-4'>
                콘텐츠는 딱 4개뿐인 Poobin_Movie!<br /> 얼른 가입해서 아무때나 재밌게 보세요.<br /> 감사합니다.
            </div>
            <Link className='mb-32' to={"/welcome/signup/first"}><button className='next-btn mt-4'>다음</button></Link>
        </div>
    </div>
    )
}

export default LoginBefore