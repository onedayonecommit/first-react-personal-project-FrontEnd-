import React from 'react'
import { Searchbar } from '../../components'
import { Link } from 'react-router-dom';
import { mainlogo } from '../../image';

const Mainnav = () => {
    return (
        <div>
            <div className='header-nav header-active flex items-center'>
                <div className='brand-loggo flex'>
                    <Link to="/"><img className='nav-loggo-img' src={mainlogo}></img></Link>
                </div>
                <div className='main-div'>
                    <div>
                        <Link className='nav-child'>금주 추천 작품</Link>
                        <Link className='nav-child'>영화</Link>
                        <Link className='nav-child'>드라마</Link>
                        <Link className='nav-child'>평론판</Link>
                        <Link className='nav-child'>고객센터</Link></div>
                    <div>
                        <Searchbar />
                    </div>
                    <div><button className='logout-btn mr-20'>LOG-OUT</button></div>
                </div>
            </div>
        </div>
    )
}

export default Mainnav