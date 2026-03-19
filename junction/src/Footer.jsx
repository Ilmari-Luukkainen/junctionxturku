
function Footer() {
    return(
        <div className="footer">
            <div className="footer-socials">
                <a className="social-link icon-swap" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon-wrap">
                        <img className="icon icon-bw" src="/instagram-logo-grey.png" alt="Instagram" />
                        <img className="icon icon-color" src="/instagram-logo.png" alt="" aria-hidden="true" />
                    </span>
                    <span>Instagram</span>
                </a>
                <a className="social-link icon-swap" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon-wrap">
                        <img className="icon icon-bw" src="/linkedin-logo-grey.png" alt="LinkedIn" />
                        <img className="icon icon-color" src="/linkedin-logo.png" alt="" aria-hidden="true" />
                    </span>
                    <span>LinkedIn</span>
                </a>
            </div>
            <div className="footer-info">
                <p>TurkuXJunction 2026</p>
                <p>Kattellaa syssymmällä klo 18:37 - klo 20:67</p>
                <p>Osoitteen tie 123</p>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2026 TurkuXJunction</p>
            </div>
        </div>
    )
}

export default Footer;