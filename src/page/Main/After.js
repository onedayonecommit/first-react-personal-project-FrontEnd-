import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { MainRanddomeMovie, Searchbar } from '../../components';
import { mainlogo, paranposter, poobinlogo2, sirenposter, sirenstill1, sirenstill2, sirenstill3, whereposter } from '../../image';
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

    return (
        <div>
            <div className='header-nav header-active flex items-center'>
                <div className='brand-loggo flex'>
                    <img className='nav-loggo-img' src={mainlogo}></img>
                </div>
                <div className='main-div'>
                    <div>
                        <Link className='nav-child'>금주 추천 작품</Link>
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
            <div className='info-div'>“무슨 일이 있었지......”<br />현행 입시 제도가 규정하는 미술 실기 시험은 다섯 시간. 그러나 다섯 시간 후 새벽, 그림을 완성한 아이는 수호 단 한명 뿐 다른. 아이들은 거짓말처럼 사라졌다. 그 날 밤, 무슨 일이 있었나.</div>
            <div className='poster-info-div'><span className='poster-info'>당신이 좋아할 만한 영화</span></div>
            <div className='poster-container'>
                <div className='poster-img-box poster-siren'><Link><img className='poster-img' src={sirenposter}></img></Link></div>
                <div className='poster-img-box poster-where'><Link><img className='poster-img' src={whereposter}></img></Link></div>
                <div className='poster-img-box poster-paran'><Link><img className='poster-img' src={paranposter}></img></Link></div>
            </div>
            <div>
                <span className='poster-info'>Comming Soon!</span>
            </div>
            <div className='stillcut-container'>
                <div><img className='stillcut-img' src={sirenstill1}></img></div>
                <div><img className='stillcut-img' src={sirenstill2}></img></div>
                <div><img className='stillcut-img' src={sirenstill3}></img></div>
            </div>
        </div>
    )
}

export default After