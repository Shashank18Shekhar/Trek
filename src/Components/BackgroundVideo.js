import React from 'react';
import classes from './BackgroundVideo.module.css';


const BackgroundVideo = () => {
    return(
        <div style={{
            width:window.innerWidth,
            height:window.innerHeight
        }}>
<video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src="https://trekmunk.b-cdn.net/home.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
    );
}

export default BackgroundVideo;