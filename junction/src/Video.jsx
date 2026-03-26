import videoSource from './assets/junctionxdelft-video.mp4';
import './Video.css';

export default function Video() {
    return (
        <div className="video-wrapper">
            <video 
                className="custom-video"
                autoPlay 
                loop 
                muted
                playsInline
            >
                <source src={videoSource} type="video/mp4" />
            </video>
        </div>
    );
}