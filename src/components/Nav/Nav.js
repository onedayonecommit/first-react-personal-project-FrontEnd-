import React from 'react'
import { Link } from 'react-router-dom'
import css from './Nav.css'
const Nav = () => {
    return (
        <nav class="nav-bar flex justify-between items-center px-14">
            <div className='flex'><Link to='/'><img src={require("../../image/영화.png")} className="w-16 h-16" /></Link>
                <ul className='flex items-center ml-8'>
                    <li className='m-2 text-light font text-sm'><Link to={'/hb/movie'}>영화</Link></li>
                    <li className='m-2 text-light font text-sm'><Link to={'/hb/theater'}>연극</Link></li>
                    <li className='m-2 text-light font text-sm'><Link to={'/hb/series'}>시리즈 별로 모아보기</Link></li>
                    <li className='m-2 text-light font text-sm'><Link to={'/hb/mypage/wish-list'}>찜한 콘텐츠</Link></li>
                    <li className='m-2 text-light font text-sm'><Link to={'/hb/today-event'}>금일의 이벤트</Link></li>
                </ul></div>
            <ul className='flex '>
                <li className='ml-4'><Link to={"/welcome/login"}>로그인</Link></li>
                <li className='ml-4'><Link to={"/welcome/signup"}>회원가입</Link></li>
            </ul>
        </nav>
    )
}

export default Nav