import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { MainRanddomeMovie, Searchbar } from '../../components'
import Commingsoon from './Commingsoon';
import Mainnav from './Mainnav';
import Mainplayerbtn from './Mainplayerbtn';
import Todaybest from './Todaybest';

const After = () => {

    return (
        <div>
            <Mainnav />
            <MainRanddomeMovie />
            <Mainplayerbtn />
            <Todaybest />
            <Commingsoon />
        </div>
    )
}

export default After