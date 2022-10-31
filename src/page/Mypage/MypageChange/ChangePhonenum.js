import React from 'react'
import "./Change.css"
const ChangePhonenum = () => {

    return (
        <div>
            <div className='change-div'>
                <input placeholder='Phonenum' className='change-email-input' type="text" onChange={(e) => {
                    console.log(e.target.value)
                }} />
                <button className='change-text' onClick={() => {
                }}>변경</button>
            </div>
        </div>
    )
}

export default ChangePhonenum