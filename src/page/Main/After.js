import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { MainRanddomeMovie, Searchbar } from '../../components';
import { poobinlogo2 } from '../../image';
import GetMovieFetch from '../../redux/middlewares/Getmoviefetch';
import { logout } from '../../redux/reducer/LoginSlice';

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
        console.log("6")
    }
    useEffect(() => {
        getmoviefunc()
    }, [])
    const movieinfo = useSelector(state => state.getMovie.movie)
    console.log(movieinfo)

    movieinfo.map((e) => {

    })

    return (
        <div>
            <div className='header-nav header-active flex items-center'>
                <div className='brand-loggo flex'>
                    <img className='nav-loggo-img' src={poobinlogo2}></img>
                </div>
                <div className='main-div'>
                    <div><Link className='nav-child'>금일 추천 영화</Link>
                        <Link className='nav-child'>금주 추천 영화</Link>
                        <Link className='nav-child'>영화</Link>
                        <Link className='nav-child'>드라마</Link>
                        <Link className='nav-child'>평론판</Link>
                        <Link className='nav-child'>고객센터</Link></div>
                    <div>
                        <Searchbar />
                    </div>
                    <div><button className='logout-btn mr-20'>LOG-OUT</button></div>
                </div>
            </div>
            <MainRanddomeMovie />
            <Link to="/"><button className='Watch-btn'>재생</button></Link>
            <Link to="/"><button className='Watch-btn2'>상세 보기</button></Link>
            <img src={require("../../image/사이렌로고1.png")} className="siren-loggo" />
            <div className='info-div'>{movieinfo[0].movie_info}</div>
        </div>
    )
}

export default After