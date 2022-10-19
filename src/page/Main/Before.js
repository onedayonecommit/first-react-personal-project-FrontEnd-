import React from 'react'
import { Link } from 'react-router-dom'
const Before = () => {
    return (
        <div className='main_body'>
            <main>
                <div className="top-bar">
                    <div className="logo"><img src={require("../../image/영화.png")} alt="netflix" /></div>
                    <div className="buttons">
                        <select name="Language" id="lang">
                            <option value="portuguese">한국어</option>
                            <option value="english">English</option>
                        </select>
                        <Link to="#">로그인</Link>
                    </div>
                </div>
                <div className="sing-in">
                    <h1>Poobin의 영화를 한눈에</h1>
                    <h2>가입하고 돈부터 내세요</h2>

                    <h3>그럼 감상 가능합니다.
                    </h3>
                    <label>
                        <input type="email" placeholder="Email" className='text-gray-900' />
                        <input type="button" value="시작하기" />
                    </label>
                </div>
            </main>
        </div>
    )
}

export default Before