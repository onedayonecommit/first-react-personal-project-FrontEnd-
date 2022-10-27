import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getCookie } from '../../Cookies';
import UpdateWriteFinalFetch from '../../redux/middlewares/UpdateWriteFinalFetch';
import UpdateWriteSeeFetch from '../../redux/middlewares/UpdateWriteSeeFetch';
import { changecontent, changetitle } from '../../redux/reducer/UpdateWriteSeeSlice';
import "./RegistWrite.css"
const Updatewrite = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const cookie = getCookie("MY AT")
    console.log(params)
    const WriteOneupdate = () => {
        dispatch(UpdateWriteSeeFetch({
            bno: params.id
        }))
    }
    useEffect(() => {
        WriteOneupdate()
    }, [])
    const title = useSelector(state => state.updateWriteSee.title)
    const content = useSelector(state => state.updateWriteSee.content)
    return (
        <div>
            <div className='regist-write-wrap'>
                <div className='title-input-div'>
                    <div><span className='title-text-span'>제목:</span><input value={title} className='title-input' placeholder='제목을 입력하세요' type="text" onChange={(e) => {
                        dispatch(changetitle(e.target.value))
                    }} /></div>
                </div>
                <div className='content-textarea-div'>
                    <textarea value={content} className='content-textarea' onChange={(e) => {
                        dispatch(changecontent(e.target.value))
                    }} placeholder='내용을 입력하세요' />
                </div>
            </div>
            <div className='flex justify-end regist-btn1-div'>
                <button onClick={() => {
                    if (!window.confirm("수정을 취소하시겠습니까? 수정한 내용은 저장되지 않습니다.")) alert("ok")
                    else nav("/welcome/freeboard/" + params.id)
                }} className='exit-btn1'>나가기</button>
                <button className='regist-btn1' onClick={() => {
                    if (title != "" && content != "") {
                        dispatch(UpdateWriteFinalFetch({
                            title: title,
                            content: content,
                            accesstoken: cookie,
                            bno: params.id
                        }))
                    }
                    else alert("제목/내용은 필수 입력 사항입니다.")
                }}>수정하기</button>
            </div>
        </div>
    )
}

export default Updatewrite