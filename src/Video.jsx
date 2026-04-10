import './Video.css';
// Tuodaan video tiedostona (varmista, että tiedostonimi on täsmälleen tämä)
import brandVideo from '/JunctionXbrandmovie.mp4';

export default function Video() {
    return (
        <div className="video-wrapper">
            <video 
                className="custom-video"
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
            >
                <source src={brandVideo} type="video/mp4" />
                Selaimesi ei tue videon toistoa.
            </video>
        </div>
    );
}