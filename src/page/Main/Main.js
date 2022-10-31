import React from 'react'

import { Link } from 'react-router-dom';
import { Nav, Searchglass } from '../../components';
import After from './After';
import Before from './Before';
import css from "./Main.css"
const Main = () => {
    const loging = window.localStorage.loginstatus
        ((e) => {

        })
    return (
        <div>
            {loging == "true" ?
                <After />
                :
                <Before />
            }
            {/* <Nav />
            <Searchglass />
            <div className='w-2/5 h-2/5'><img className='w-screen h-screen' src={require("../../image/사이렌_포스터.jpeg")}></img>
            </div> */}
        </div>
    )
}

export default Main