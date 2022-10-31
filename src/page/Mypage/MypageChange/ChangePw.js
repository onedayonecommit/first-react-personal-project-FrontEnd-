import React from 'react'
import "./Change.css"
const ChangePw = () => {

    return (
        <div>
            <div className='change-div'>
                <input placeholder='비밀번호' className='change-email-input pw-input' type="password" onChange={(e) => {
                    console.log(e.target.value)
                }} />
                <input placeholder='비밀번호 확인' className='change-email-input' type="password" onChange={(e) => {
                    console.log(e.target.value)

                }} />
                <button className='change-text' onClick={() => { }}>변경</button>
            </div>
        </div>
    )
}

export default ChangePw