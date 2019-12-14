import React from 'react';
import YouTube from 'react-youtube';

export default function YoutubeVideo({videoUrl}) {
    
  const opts = {
    height: '245',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };      

  return (      
    <YouTube videoId={`${videoUrl}`} opts={opts} />
  )
}

