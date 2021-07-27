import React, { useState, useCallback } from "react";
import ReactPlayer from "react-player";

export default function HeroTapVideo() {
  return (
    // <video className="w-full h-80" autoPlay loop muted>
    //   <source src={TapVideo} type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    // <ReactPlayer
    //   url="https://www.video-url.com"
    //   playing={isPlaying}
    //   controls
    //   onContextMenu={handleContextMenu}
    // />
    // <video className="w-full h-80" autoPlay loop muted preload={auto}>
    //   <source src="/tap-bluebg.mp4" type="video/mp4" />
    // </video>
    <video className="w-full h-80" autoPlay playsinline="" loop muted="">
      <source
        src="https://us.getnexar.com/_next/static/videos/day-sm-26e976708354751d886f49859ae35e02.webm"
        type="video/webm"
      />
      <source
        src="https://us.getnexar.com/_next/static/videos/day-f744cb887147aa49ab08d08031aafffe.mp4"
        type="video/mp4"
      />
    </video>
  );
}
