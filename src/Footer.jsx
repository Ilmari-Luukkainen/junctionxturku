function Footer() {
    return (
        <footer className="footer">
            <div className="footer-socials">
                {/* Instagram */}
                <a 
                    className="social-link icon-swap" 
                    href="https://www.instagram.com/junctionxturku" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow Junction Turku on Instagram"
                >
                    <span className="icon-wrap">
                        <img className="icon icon-bw" src="./instagram-logo-grey.webp" alt="" width="24" height="24" loading="lazy" />
                        <img className="icon icon-color" src="./instagram-logo.webp" alt="" aria-hidden="true" width="24" height="24" loading="lazy" />
                    </span>
                    <span>@JunctionXTurku</span>
                </a>

                {/* LinkedIn */}
                <a 
                    className="social-link icon-swap" 
                    href="https://www.linkedin.com/company/junction-x-turku/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow Junction Turku on LinkedIn"
                >
                    <span className="icon-wrap">
                        <img className="icon icon-bw" src="./linkedin-logo-grey.webp" alt="" width="24" height="24" loading="lazy" />
                        <img className="icon icon-color" src="./linkedin-logo.webp" alt="" aria-hidden="true" width="24" height="24" loading="lazy" />
                    </span>
                    <span>@JunctionXTurku</span>
                </a>

                {/* X (Twitter) */}
                <a 
                    className="social-link icon-swap" 
                    href="https://x.com/JunctionXTurku" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow Junction Turku on X"
                >
                    <span className="icon-wrap">
                        <img className="icon icon-bw" src="./x-logo-grey.webp" alt="" width="24" height="24" loading="lazy" />
                        <img className="icon icon-color" src="./x-logo.webp" alt="" aria-hidden="true" width="24" height="24" loading="lazy" />
                    </span>
                    <span>@JunctionXTurku</span>
                </a>
            </div>

            <div className="footer-info">
                <address style={{ fontStyle: 'normal' }}>
                    <p>16–18 October 2026</p>
                    <p>Turku, Finland</p>
                </address>
                <p>
                    <a href="https://hackjunction.com" rel="external">hackjunction.com</a>
                </p>
                
                    
            </div>

            <div className="footer-copyright">
                <p>JunctionX Turku ry<br />Y-tunnus: 3611752-6</p>
                <p>Copyright © 2026 Junction Turku</p>
            </div>
        </footer>
    );
}

export default Footer;