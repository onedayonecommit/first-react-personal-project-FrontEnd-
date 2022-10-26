import React from 'react'
import { Link } from 'react-router-dom'
import { mainlogo } from '../../image'

const MypageNav = () => {
    return (
        <div>
            <div className='header-nav header-active flex items-center justify-between'>
                <div className='brand-loggo'>
                    <Link to="/"><img className='nav-loggo-img' src={mainlogo} alt="poobin logo" /></Link>
                </div>

                <div>
                    <button className='logout-btn mr-20' onClick={() => {
                        if (window.confirm("변경사항을 저장하지 않은 경우 저장되지 않습니다. 로그아웃 하시겠습니까?")) { window.location.href = "/" } else { alert("취소하셨습니다.") }
                    }}>LOG-OUT</button>
                </div>
            </div >
        </div >
    )
}

export default MypageNav