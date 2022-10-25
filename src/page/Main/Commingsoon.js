import React from 'react'
import { sirenstill1, sirenstill2, sirenstill3 } from '../../image'

const Commingsoon = () => {
    return (
        <div>
            <div>
                <span className='poster-info'>Comming Soon!</span>
            </div>
            <div className='stillcut-container'>
                <div><img className='stillcut-img' src={sirenstill1}></img></div>
                <div><img className='stillcut-img' src={sirenstill2}></img></div>
                <div><img className='stillcut-img' src={sirenstill3}></img></div>
            </div>
        </div>
    )
}

export default Commingsoon