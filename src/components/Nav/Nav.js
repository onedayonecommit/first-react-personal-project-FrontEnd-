import React from 'react'
import { Link } from 'react-router-dom'
import css from './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav class="nav-bar flex justify-between items-center pl-14 pr-20 bg-gray-200">
                <div className='flex'><Link to='/'>
                    <img src={require("../../image/영화.png")} className="w-16 h-16" />
                </Link>
                    <ul className='flex items-center ml-8'>
                        <li className='m-4 text-light font text-l'><Link to={'/hb/movie'}>영화</Link></li>
                        <li className='m-4 text-light font text-l'><Link to={'/hb/theater'}>연극</Link></li>
                        <li className='m-4 text-light font text-l'><Link to={'/hb/series'}>시리즈 별로 모아보기</Link></li>
                        <li className='m-4 text-light font text-l'><Link to={'/hb/mypage/wish-list'}>찜한 콘텐츠</Link></li>
                        <li className='m-4 text-light font text-l'><Link to={'/hb/today-event'}>금일의 이벤트</Link></li>
                    </ul></div>


                <div className='flex'>
                    <button class="peer px-4 py-2 bg-red-300 hover:bg-red-400 text-white rounded ">공지사항/게시판</button>

                    <div class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
                        <a class=" hover:bg-gray-200" href="#">공지사항</a>
                        <a class=" hover:bg-gray-200" href="#">자유 게시판</a>
                    </div>
                </div>

                <ul className='flex '>
                    <li className='ml-8'><Link to={"/welcome/login"}>로그인</Link></li>
                    <li className='ml-8'><Link to={"/welcome/signup"}>회원가입</Link></li>
                </ul>

            </nav>
        </div>
    )
}

export default Nav