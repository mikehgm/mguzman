import React from 'react';
import styles from './VideoPlayer.module.css';

// Decorative, muted background video. playsInline is required for autoplay on iOS.
const VideoPlayer = ({ classNameProp, videoSrc, poster }) => {
    const className = classNameProp ? `${styles.backgroundVideo} ${classNameProp}` : styles.backgroundVideo;
    return (
        <div>
            <video
                src={videoSrc}
                poster={poster}
                className={className}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
            />
        </div>
    );
};

export default VideoPlayer;
