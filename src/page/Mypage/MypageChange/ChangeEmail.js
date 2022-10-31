import React from 'react'
import "./Change.css"

const ChangeEmail = () => {
    return (
        <div>
            <div className='change-div'>
                <input placeholder='Email' className='change-email-input' type="text" onChange={(e) => {
                }} />
                <button onClick={() => {
                }}>변경</button>
            </div>
        </div>
    )
}

export default ChangeEmail