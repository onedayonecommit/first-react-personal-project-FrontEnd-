import React from 'react'
import { Link } from 'react-router-dom'

const Navnotice = () => {
    return (
        <div className='flex'>
            <button className="peer px-4 py-2 bg-red-500 hover:bg-red-500 text-white rounded ">공지사항/게시판</button>

            <div className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
                <Link to="/#" className=" hover:bg-gray-200">공지사항</Link>
                <Link to="/#" className=" hover:bg-gray-200">자유 게시판</Link>
            </div>
        </div>
    )
}

export default Navnotice