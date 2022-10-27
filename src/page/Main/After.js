import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { MainRanddomeMovie, Searchbar } from '../../components';
import { getCookie } from '../../Cookies';
import { mainlogo, paranposter, poobinlogo2, sirenposter, sirenstill1, sirenstill2, sirenstill3, whereposter } from '../../image';
import GetMovieFetch from '../../redux/middlewares/Getmoviefetch';
import { logout } from '../../redux/reducer/LoginSlice';
import Commingsoon from './Commingsoon';
import Mainnav from './Mainnav';
import Mainplayerbtn from './Mainplayerbtn';
import Todaybest from './Todaybest';

const After = () => {
    // 페이지 로딩 되자마자 일단 영화정보들 디비에서 싹 빼옴
    // 그리고 배열에 담은다음 랜덤으로 하나 추출해서 화면에 전광판마냥 크게 하나 띄우고
    // 아래에 슬라이드로 영화 3개 번갈아가면서 보여주고 그 아래에선 그냥 네모박스 3개 만들고 영화 포스터들 띄우고 클릭하면 들어가서 보기
    // 맨 아래에 푸터 
    // 네비 바 == 로고 / 영화 / 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getmoviefunc = () => {
        dispatch(GetMovieFetch())
    }
    useEffect(() => {
        getmoviefunc()
    }, [])

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