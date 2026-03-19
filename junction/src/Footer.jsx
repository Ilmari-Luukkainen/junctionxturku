
function Footer() {
    return(
        <div className="footer">
            <div className="footer-socials">
                <a className="social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram-logo.png" alt="Instagram"/>
                    <span>Instagram</span>
                </a>
                <a className="social-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin-logo.png" alt="LinkedIn"/>
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