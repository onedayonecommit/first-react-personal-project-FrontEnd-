import React from 'react'
import "./RegistWrite.css"
const Updatewrite = () => {
    return (
        <div>
            <div className='regist-write-wrap'>
                <div className='title-input-div'>
                    <div><span className='title-text-span'>제목:</span><input className='title-input' placeholder='제목을 입력하세요' type="text" onChange={(e) => {

                    }} /></div>
                </div>
                <div className='content-textarea-div'>
                    <textarea className='content-textarea' onChange={(e) => {

                    }} placeholder='내용을 입력하세요' />
                </div>
            </div>
            <div className='flex justify-end regist-btn1-div'>
                <button onClick={() => {
                }} className='exit-btn1'>나가기</button>
                <button className='regist-btn1' onClick={() => {

                }}>수정하기</button>
            </div>
        </div>
    )
}

export default Updatewrite