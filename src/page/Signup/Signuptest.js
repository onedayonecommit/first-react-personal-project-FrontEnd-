import React from 'react'
import { Link } from 'react-router-dom'
import { SignupBefore } from '../../components'
const Signuptest = () => {
    return (
        <div className='signup-body-first'>
            <SignupBefore />
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

export default Signuptest