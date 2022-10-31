import React from 'react'
import { Link } from 'react-router-dom'
import "./Freeboard.css"
import FreeboardHeader from './FreeboardHeader'
import FreeboardNav from './FreeboardNav'
const Freeboard = () => {
    return (
        <div>
            <FreeboardNav />
            <FreeboardHeader />
            <div className='regist-write-btn-div'>
                <button className='regist-write-btn' onClick={() => {
                }}>글쓰기</button>
            </div>
        </div >
    )

}

export default Freeboard