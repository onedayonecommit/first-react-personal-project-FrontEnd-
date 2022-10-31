import React from 'react'

import { Link } from 'react-router-dom'
const Before = () => {
    return (
        <div>
            <div className='main_body'>
                <main>
                    <div className="top-bar">
                        <Link to="/"><div className="logo"><img alt="netflix" /></div></Link>
                        <div className="buttons">
                            <select name="Language" id="lang">
                                <option value="portuguese">한국어</option>
                                <option value="english">English</option>
                            </select>
                            <Link to="/welcome/login">로그인</Link>
                        </div>
                    </div>
                    <div className="sing-in">
                        <h1>Poobin의 영화를 한눈에</h1>
                        <h2>가입하고 돈부터 내세요</h2>

                        <h3>그럼 감상 가능합니다.
                        </h3>
                        <label>
                            <input type="email" placeholder="Email" className='text-gray-900' name='MainEmail' />
                            {/* <input type="button" value="시작하기" /> */}
                            <button className='start-btn' onClick={() => {
                            }}>시작하기</button>
                        </label>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Before