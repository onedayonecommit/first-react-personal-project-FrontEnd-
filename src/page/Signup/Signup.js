import React from 'react'

import { Nav, Searchglass } from '../../components';



const Signup = () => {
    return (
        <div className='signup-body'>
            <Nav />
            <Searchglass />
            <input name='IdInput' placeholder='이메일 또는 전화번호' />
            <input name='PwInput' placeholder='비밀번호' />
            <button onClick={() => {

            }} >id중복확인</button>
            상태:
            <button className="bg-slate-500 rounded-xl px-2 text-white">찐 회원가입</button>

        </div>
    )
}

export default Signup