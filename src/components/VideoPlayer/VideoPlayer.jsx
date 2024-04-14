import React from "react";
import video from "../../assets/video.mp4";
import "./VideoPlayer.css";
const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
