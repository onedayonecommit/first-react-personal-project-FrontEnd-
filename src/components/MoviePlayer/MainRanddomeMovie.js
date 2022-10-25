import React from 'react'
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';
import css from './Player.css'
// import Youtube from 'react-youtube'
const MainRanddomeMovie = () => {
    const movieinfo = useSelector(state => state.getMovie.movie)
    console.log(movieinfo[0].movie_url)

    return (

        <div className='main-player-div h-full'>
            <div className='position-div'>
                <ReactPlayer
                    className="react-player"
                    url={movieinfo[0].movie_url + "#t=5s,25s "}
                    width="100vw%"
                    height="100vh"
                    muted={true}
                    playing={true}
                    loop={true}
                    controls={true}
                    onEnded={() => { }}
                />
            </div>
        </div>
    )
}

export default MainRanddomeMovie