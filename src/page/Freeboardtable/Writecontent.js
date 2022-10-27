import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCookie } from '../../Cookies';
import DeleteWriteFetch from '../../redux/middlewares/DeleteWriteFetch';
import UpdateWriteFetch from '../../redux/middlewares/UpdateWriteFetch';
import WriteOneFetch from '../../redux/middlewares/WriteOneFetch';
import "./Writecontent.css"
const Writecontent = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const cookie = getCookie("MY AT")
    const writeone = () => {
        dispatch(WriteOneFetch(params))
    }
    writeone()
    const writecontent = useSelector(state => state.writeOne.content)
    const writewriter = useSelector(state => state.writeOne.writer)
    const writeupdatedAt = useSelector(state => state.writeOne.updatedAt)
    const writecreatedAt = useSelector(state => state.writeOne.createdAt)
    const writebno = useSelector(state => state.writeOne.bno)
    const finalupdatedAt = () => {
        return writeupdatedAt == writecreatedAt ? (
            null
        )
            :
            (
                <div className='write-updatedAt-div info-small'>업데이트 날짜: {writecreatedAt.substr(0, 10)}</div>
            )
    }
    const writeviews_point = useSelector(state => state.writeOne.views_point)
    const writetitle = useSelector(state => state.writeOne.title)
    return (
        <div>
            <div className='write-title-wrap'>
                <div className='write-title-div'>
                    <div className='write-title-2'>{writetitle}</div>
                </div>
                <div className='write-content-div'>
                    <div className='write-info-div'>
                        <div className='write-writer-div info-small'>작성자: {writewriter}</div>
                        <div className='write-updatedAt-div info-small'>등록일자: {writeupdatedAt.substr(0, 10)}</div>{finalupdatedAt()}
                        <div className='write-views_point-div info-small'>조회수:{writeviews_point}</div>
                    </div>
                </div>
                <div className='write-main-content-div'>
                    <div className='write-content'>
                        {writecontent}
                    </div>
                </div>
            </div>
            <div className='write-btn-div'>
                <button onClick={() => {
                    dispatch(DeleteWriteFetch({
                        accesstoken: cookie,
                        writer: writewriter,
                        bno: writebno
                    }))
                }} className='write-btn'>삭제</button>
                <button onClick={() => {
                    dispatch(UpdateWriteFetch({
                        bno: writebno,
                        accesstoken: cookie,
                        writer: writewriter,
                    }))
                }} className='write-btn'>수정</button>
            </div>
        </div>
    )
}

export default Writecontent