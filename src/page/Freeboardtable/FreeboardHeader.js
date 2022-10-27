import React from 'react'
import "./Freeboard.css"

const FreeboardHeader = () => {
    return (
        <div> <div className='board-name-div'>자유게시판</div>
            <div className='freeboard-table-wrap'>
                <table className='freeboard-table'>
                    <tr className='freeboard-tr'>
                        <td className='bno-th-td th-head'>글번호</td>
                        <td className='title-th-td th-head'>제목</td>
                        <td className='writer-th-td th-head'>작성자</td>
                        <td className='view-th-td th-head'>조회수</td>
                        <td className='registdate-th-td th-head'>작성일자</td>
                    </tr>
                </table>
            </div></div>
    )
}

export default FreeboardHeader