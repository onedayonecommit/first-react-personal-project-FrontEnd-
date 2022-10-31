import React from 'react'
import { Searchbar } from '../../components'
import { Link } from 'react-router-dom';
import { mainlogo } from '../../image';
import './Freeboard.css'
const FreeboardNav = () => {

    return (
        <div>
            <div className='header-active flex items-center'>
                <div className='brand-loggo flex'>
                    <Link to="/"><img className='nav-loggo-img' src={mainlogo}></img></Link>
                </div>
                <div className='main-div'>
                    <div>
                        <Link to='/' className='nav-child'>가장 핫한 작품</Link>
                        <Link to='/' className='nav-child'>영화</Link>
                        <Link to='/welcome/Freeboard' className='nav-child'>토론의 마당</Link>
                        <Link to='/' className='nav-child'>고객센터</Link></div>
                    <div>
                        <Searchbar />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div><Link to="/welcome/mypage" className='nav-child mr-4'>마이페이지</Link></div>
                        <div><button className='logout-btn mr-20' onClick={() => {
                        }}>LOG-OUT</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeboardNav