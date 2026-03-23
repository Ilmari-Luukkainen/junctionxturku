import { useEffect, useState } from "react";
import logo from "./assets/JUNCTIONx_logos-emblem-white.svg";
import "./header.css";

function Header({ onNavigate }) {
  const [visible, setVisible] = useState(true);
  let timeout = null;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Countdown to next November 11
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const year = now.getFullYear();
      let target = new Date(year, 10, 11, 0, 0, 0); // November is month 10 (0-based)
      if (now > target) {
        target = new Date(year + 1, 10, 11, 0, 0, 0);
      }
      const diff = target - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <header className={`header ${visible ? "show" : "hide"}`}>
      <div className="header-left">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('/');
          }}
          aria-label="Etusivu"
        >
          <img src={logo} alt="Turku X Junction" className="nav-logo" />
        </a>
      </div>

      <div className="header-center">
        <div className="countdown" aria-live="polite">{timeLeft.days}d {String(timeLeft.hours).padStart(2,'0')}h {String(timeLeft.minutes).padStart(2,'0')}m {String(timeLeft.seconds).padStart(2,'0')}s</div>
      </div>

      <nav className="main-nav" role="navigation" aria-label="Päävalikko">
        <a
          href="/challenges"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('/challenges');
          }}
        >
          Haasteet
        </a>
      </nav>
    </header>
  );
}

export default Header;