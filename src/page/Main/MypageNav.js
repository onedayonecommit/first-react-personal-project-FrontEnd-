import React from 'react'
import { Link } from 'react-router-dom'

const MypageNav = () => {

    return (
        <div>
            <div className='header-nav header-active flex items-center justify-between'>
                <div className='brand-loggo'>
                    <Link to="/"><img className='nav-loggo-img' alt="poobin logo" /></Link>
                </div>

                <div>
                    <button className='logout-btn mr-20' onClick={() => {
                    }}>LOG-OUT</button>
                </div>
            </div >
        </div >
    )
}

export default MypageNav