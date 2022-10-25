import React from 'react'
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/youtube';
import css from './Player.css'
// import Youtube from 'react-youtube'
const MainRanddomeMovie = () => {
    return (

        <div className='main-player-div h-full'>
            <div className='position-div'>
                <ReactPlayer
                    className="react-player"
                    url={'https://www.youtube.com/watch?v=QxY-8QFA9QA&ab_channel=HYUNBINLEE' + "#t=5s,25s "}
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