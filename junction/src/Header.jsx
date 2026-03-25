import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "./assets/JUNCTIONx_logos-emblem-white.svg";
import "./header.css";

function Header({ onNavigate }) {
  const menuSections = [
{
      title: "About",
      subtitle: "Learn more about Junction Turku and our mission to empower the local tech community.",
      links: [{ label: "Our Team", path: "/about" }],
    },
    {
      title: "Challenges",
      subtitle: "Explore the tracks and hackathon challenges provided by our industry partners.",
      links: [{ label: "All Challenges", path: "/challenges" }],
    },
    {
      title: "Contact",
      subtitle: "Have questions or want to collaborate? Connect with the Junction Turku team.",
      links: [
        { label: "Instagram", path: "https://www.instagram.com/junctionturku" },
        { label: "LinkedIn", path: "https://www.linkedin.com/company/junction-turku" }
      ],
    },
  ];

  const [visible, setVisible] = useState(true);
  const hideTimeoutRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const menuShellRef = useRef(null);
  const menuPanelRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuTimelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const navigate = (path) => {
    setIsMenuOpen(false);
    setIsExpanded(false);
    menuTimelineRef.current?.reverse();
    onNavigate(path);
  };

  useLayoutEffect(() => {
    if (!menuPanelRef.current) {
      return undefined;
    }

    gsap.set(menuPanelRef.current, {
      autoAlpha: 0,
      y: -8,
      pointerEvents: "none",
    });

    const tl = gsap.timeline({ paused: true });
    tl.to(menuPanelRef.current, {
      autoAlpha: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.24,
      ease: "power2.out",
    });

    menuTimelineRef.current = tl;

    return () => {
      tl.kill();
      menuTimelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!isExpanded || !menuShellRef.current) {
        return;
      }

      if (!menuShellRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        menuTimelineRef.current?.eventCallback("onReverseComplete", () => {
          setIsExpanded(false);
        });
        menuTimelineRef.current?.reverse();
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isExpanded]);

  const toggleMenu = () => {
    if (!menuTimelineRef.current) {
      return;
    }

    if (!isExpanded) {
      setIsMenuOpen(true);
      setIsExpanded(true);
      menuTimelineRef.current.play(0);
      return;
    }

    setIsMenuOpen(false);
    menuTimelineRef.current.eventCallback("onReverseComplete", () => {
      setIsExpanded(false);
    });
    menuTimelineRef.current.reverse();
  };

  const setMenuItemRef = (index) => (element) => {
    if (element) {
      menuItemsRef.current[index] = element;
    }
  };

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
            navigate('/');
          }}
          aria-label="Etusivu"
        >
          <img src={logo} alt="Turku X Junction" className="nav-logo" />
        </a>
      </div>

      <div className="header-center">
        <div className="countdown" aria-live="polite">{timeLeft.days}d {String(timeLeft.hours).padStart(2,'0')}h {String(timeLeft.minutes).padStart(2,'0')}m {String(timeLeft.seconds).padStart(2,'0')}s</div>
      </div>

      <div className={`header-right ${isExpanded ? "open" : ""}`} ref={menuShellRef}>
        <button
          type="button"
          className={`header-hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Sulje valikko" : "Avaa valikko"}
          aria-expanded={isMenuOpen}
          aria-controls="header-menu"
        >
          <span className="header-hamburger-line" />
          <span className="header-hamburger-line" />
        </button>

        <nav
          id="header-menu"
          className={`header-dropdown ${isExpanded ? "open" : ""}`}
          role="navigation"
          aria-label="Päävalikko"
          aria-hidden={!isExpanded}
          ref={menuPanelRef}
        >
          {menuSections.map((section, sectionIndex) => (
            <div className="header-menu-card" key={section.title} ref={setMenuItemRef(sectionIndex)}>
              <div className="header-menu-title">{section.title}</div>
              <div className="header-menu-subtitle">{section.subtitle}</div>

              <div className="header-menu-links">
                {section.links.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(link.path);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;