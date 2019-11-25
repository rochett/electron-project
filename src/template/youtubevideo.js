import React from 'react';
import YouTube from 'react-youtube';
 
class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: '290',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
 
    return (      
      <YouTube
        videoId="Zs0hLEHAoSs"
        opts={opts}              
      />      
    );
  }

}

export default YoutubeVideo;