import React from 'react'
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/youtube';
import css from './Player.css'
const MainRanddomeMovie = () => {
    return (
        <div className='main-player-div h-full'>
            <ReactPlayer
                className="react-player"
                url={"https://youtu.be/QxY-8QFA9QA"}
                width="100vw%"
                height="100vh"
                muted={true}
                playing={true}
                loop={true}
                controls={true}
            />
            {/* <video muted autoPlay loop crossOrigin='anonymous'>
                <source src='https://youtu.be/QxY-8QFA9QA' />
            </video>
            <div className='info-text'>
                <h1>HiHi</h1>
            </div> */}
        </div>
    )
}

export default MainRanddomeMovie