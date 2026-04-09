import './Video.css';

export default function Video() {
    // Tässä on videon ID suoraan antamastasi linkistä
    const videoId = "-HZa8mh3HgQ"; 
    
    // Parametrit: 
    // autoplay=1 (käynnistyy heti)
    // mute=1 (pakollinen, jotta autoplay toimii selaimissa)
    // loop=1 & playlist=ID (nämä kaksi yhdessä tarvitaan, jotta video looppaa)
    // controls=0 (tekee videosta puhtaamman näköisen taustalle)
    const youtubeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0`;

    return (
        <div className="video-wrapper">
            <iframe
                className="custom-video"
                src={youtubeSrc}
                title="JunctionX brand movie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading='lazy'
            ></iframe>
        </div>
    );
}