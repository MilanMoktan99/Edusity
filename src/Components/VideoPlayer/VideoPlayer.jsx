import React, { useRef } from "react";
import "./VideoPlayer.css";
import Video from "../../assets/college-video.mp4";

function VideoPlayer({playStatus, setPlayStatus}) {

    const player = useRef(null);

    const closePlayer = (event) => {
        if(event.target === player.current) {
            setPlayStatus(false);
        }
    }

    return (
        <div className={`video-player ${playStatus ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={Video} muted autoPlay controls></video>
        </div>
    );
}

export default VideoPlayer