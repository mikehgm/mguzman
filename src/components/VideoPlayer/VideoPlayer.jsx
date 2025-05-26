import React from 'react'; 
import styles from  './VideoPlayer.module.css'; // Import your CSS file for styling

const VideoPlayer = ({ classNameProp, videoSrc }) => { 
    const className = classNameProp ? `${styles.backgroundVideo} ${classNameProp}` : styles.backgroundVideo; // Combine the class names if classNameProp is provided
    return (
        <div>
            <video src={videoSrc} autoPlay loop muted className={className}>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}


export default VideoPlayer;