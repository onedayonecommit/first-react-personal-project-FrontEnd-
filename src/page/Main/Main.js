import React from 'react'
import { Nav, Searchglass } from '../../components';
const Main = () => {
    return (
        <div>
            <Nav />
            <Searchglass />
            <div className='w-2/5 h-2/5'><img className='w-screen h-screen' src={require("../../image/사이렌_포스터.jpeg")}></img>
            </div>
        </div>
    )
}

export default Main