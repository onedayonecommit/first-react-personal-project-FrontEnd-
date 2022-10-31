import React from 'react'
import "./Writecontent.css"
const Writecontent = () => {
    return (
        <div>
            <div className='write-title-wrap'>
                <div className='write-title-div'>
                    <div className='write-title-2'></div>
                </div>
                <div className='write-content-div'>
                    <div className='write-info-div'>
                        <div className='write-writer-div info-small'>작성자: </div>
                        <div className='write-updatedAt-div info-small'>등록일자:</div>{ }
                        <div className='write-views_point-div info-small'>조회수:</div>
                    </div>
                </div>
                <div className='write-main-content-div'>
                    <div className='write-content'>
                    </div>
                </div>
            </div>
            <div className='write-btn-div'>
                <button onClick={() => {
                }} className='write-btn'>삭제</button>
                <button onClick={() => {
                }} className='write-btn'>수정</button>
            </div>
        </div>
    )
}

export default Writecontent