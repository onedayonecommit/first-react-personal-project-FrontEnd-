import React from 'react'
import { Link } from 'react-router-dom'
import { paranposter, sirenposter, whereposter } from '../../image'

const Mainplayerbtn = () => {
    return (
        <div>
            <Link to="/"><button className='Watch-btn'>재생</button></Link>
            <Link to="/"><button className='Watch-btn2'>상세 보기</button></Link>
            <img src={require("../../image/사이렌로고1.png")} className="siren-loggo" />
            <div className='info-div'>“무슨 일이 있었지......”<br />현행 입시 제도가 규정하는 미술 실기 시험은 다섯 시간. 그러나 다섯 시간 후 새벽, 그림을 완성한 아이는 수호 단 한명 뿐 다른. 아이들은 거짓말처럼 사라졌다. 그 날 밤, 무슨 일이 있었나.</div>
        </div>
    )
}

export default Mainplayerbtn