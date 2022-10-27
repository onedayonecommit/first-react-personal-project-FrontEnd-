import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../Cookies';
import RegistWriteFetch from '../../redux/middlewares/RegistWriteFetch';
import "./RegistWrite.css"
const Registwrite = () => {
    const cookieat = getCookie("MY AT")
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
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
                        setTitle(e.target.value)
                    }} /></div>
                </div>
                <div className='content-textarea-div'>
                    <textarea className='content-textarea' onChange={(e) => {
                        setContent(e.target.value)
                    }} placeholder='내용을 입력하세요' />
                </div>
            </div>
            <div className='flex justify-end regist-btn1-div'>
                <button onClick={() => {
                    if (!window.confirm("나가시겠습니까? 작성한 글은 저장되지 않습니다.")) alert("ok")
                    else nav("/welcome/Freeboard")
                }} className='exit-btn1'>나가기</button>
                <button className='regist-btn1' onClick={() => {
                    if (title != "" && content != "") {
                        dispatch(RegistWriteFetch({
                            title: title,
                            content: content,
                            accesstoken: cookieat
                        }))
                    }
                    else alert("제목/내용은 필수 입력 사항입니다.")
                }}>글 등록하기</button>
            </div>
        </div>
    )
}

export default Registwrite