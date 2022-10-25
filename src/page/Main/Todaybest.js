import React from 'react'
import { paranposter, paranstill1, paranstill2, paranstill3, sirenposter, sirenstill1, sirenstill2, sirenstill3, whereposter, wherestill1, wherestill2, wherestill3 } from '../../image'
import { Link } from 'react-router-dom';

const Todaybest = () => {
    return (
        <div>
            <div className='poster-info-div'>
                <span className='poster-info'>당신이 좋아할 만한 영화</span>
            </div>

            <div className='poster-container'>
                <div className='siren-hover flex justify-between'>
                    <div className='poster-img-box poster-siren'>
                        <Link><img className='poster-img' src={sirenposter}></img></Link>
                    </div>
                    <div className='poster-siren-info'>
                        감독 : 이현빈 <br />
                        장르 : 하이틴 / 범죄 <br />

                        스틸컷 : <img className='siren-still-hover-img' src={sirenstill1}></img>
                        <img className='siren-still-hover-img' src={sirenstill2}></img>
                        <img className='siren-still-hover-img' src={sirenstill3}></img>

                    </div>
                </div>

                <div className='where-hover flex justify-between'>
                    <div className='poster-img-box poster-where'>
                        <Link><img className='poster-img' src={whereposter}></img></Link>
                    </div>
                    <div className='poster-where-info'>
                        감독 : 이현빈 <br />
                        장르 : 드라마 <br />

                        스틸컷 : <img className='siren-still-hover-img' src={wherestill1}></img>
                        <img className='siren-still-hover-img' src={wherestill2}></img>
                        <img className='siren-still-hover-img' src={wherestill3}></img>

                    </div>
                </div>

                <div className='paran-hover flex justify-between'>
                    <div className='poster-paran-info'>
                        감독 : 이현빈 <br />
                        장르 : 드라마 <br />

                        스틸컷 : <img className='siren-still-hover-img' src={paranstill1}></img>
                        <img className='siren-still-hover-img' src={paranstill2}></img>
                        <img className='siren-still-hover-img' src={paranstill3}></img>
                    </div>
                    <div className='poster-img-box poster-paran'>
                        <Link><img className='poster-img last-poster-img' src={paranposter}></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todaybest