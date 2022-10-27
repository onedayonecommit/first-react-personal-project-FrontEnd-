import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import WriteAllFetch from '../../redux/middlewares/WriteAllFetch'
import Mainnav from '../Main/Mainnav'
import "./Freeboard.css"
import FreeboardHeader from './FreeboardHeader'
import FreeboardNav from './FreeboardNav'
const Freeboard = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const getWriteall = () => {
        dispatch(WriteAllFetch())
    }
    useEffect(() => {
        getWriteall()
    }, [])
    const Writing = useSelector(state => state.writeAll.Write)
    console.log(Writing);




    return (
        <div>
            <FreeboardNav />
            <FreeboardHeader />
            {Writing.map((e) => {
                return (
                    <div className='child-div'>
                        <tr className='freeboard-tr'>
                            <td className='bno-th-td th-head'>{e.bno}</td>
                            <td className='title-th-td th-head'><Link to={'/welcome/freeboard/' + (e.bno)}>{e.title}</Link></td>
                            <td className='writer-th-td th-head'>{e.writer}</td>
                            <td className='view-th-td th-head'>{e.views_point}</td>
                            <td className='registdate-th-td th-head'>{e.createdAt.substr(0, 10)}</td>
                        </tr></div>
                )
            })}
            <div className='regist-write-btn-div'>
                <button className='regist-write-btn' onClick={() => {
                    nav("/welcome/Registwrite")
                }}>글쓰기</button>
            </div>
        </div >
    )

}

export default Freeboard