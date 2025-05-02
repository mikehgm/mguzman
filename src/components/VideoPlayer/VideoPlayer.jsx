import React from 'react'; 
import styles from  './VideoPlayer.module.css'; // Import your CSS file for styling

const VideoPlayer = ({ videoSrc }) => { 
    return (
        <div>
            <video src={videoSrc} autoPlay loop muted className={styles.backgroundVideo}>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}


export default VideoPlayer;