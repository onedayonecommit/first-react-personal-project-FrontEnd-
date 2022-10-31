import React from 'react'
import "./RegistWrite.css"
const Registwrite = () => {
    return (
        <div>
            <div className='regist-write-wrap'>
                <div className='option-bar-div'>
                    <select className='option-bar'>
                        <option value="freeboard">자유게시판</option>
                        <option value="siren">사이렌</option>
                        <option value="where">어디에도없는</option>
                        <option value="paran">파란</option>
                    </select>
                </div>
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
                }}>글 등록하기</button>
            </div>
        </div>
    )
}

export default Registwrite