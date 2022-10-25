import React from 'react'
import { Link } from 'react-router-dom'
import { mainlogo, poobinlogo2 } from '../../image'
const NavSide = () => {
    return (
        <div className='flex'><Link to='/'>
            <Link to="/"><img src={mainlogo} className="w-16 h-16" /></Link>
        </Link>
            <ul className='flex items-center ml-8'>
                <li className='m-4 text-light font text-l'><Link to={'/hb/movie'}>영화</Link></li>
                <li className='m-4 text-light font text-l'><Link to={'/hb/theater'}>연극</Link></li>
                <li className='m-4 text-light font text-l'><Link to={'/hb/series'}>시리즈 별로 모아보기</Link></li>
                <li className='m-4 text-light font text-l'><Link to={'/hb/mypage/wish-list'}>찜한 콘텐츠</Link></li>
                <li className='m-4 text-light font text-l'><Link to={'/hb/today-event'}>금일의 이벤트</Link></li>
            </ul></div>
    )
}

export default NavSide