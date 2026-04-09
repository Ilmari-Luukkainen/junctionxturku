import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "/JUNCTIONx_logos-emblem-white.svg";
import "./header.css";

function Header({ onNavigate }) {
  const menuSections = [
    {
      title: "About",
      subtitle: "Learn more about Junction Turku and our mission to empower the local tech community.",
      links: [
        { label: "Our Team", path: "/about" },
        { label: "FAQ", path: "/#faq" },
      ],
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
        { label: "Instagram", path: "https://www.instagram.com/junctionxturku" },
        { label: "LinkedIn", path: "https://www.linkedin.com/company/junction-x-turku/" },
        { label: "𝕏", path: "https://x.com/JunctionXTurku" }
      ],
    },
  ];

  const headerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const headerOffsetRef = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const menuShellRef = useRef(null);
  const menuPanelRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuTimelineRef = useRef(null);

  // Scroll-logiikka optimoituna
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let running = true;
    lastScrollYRef.current = window.scrollY;

    const onScroll = () => {
      if (!running || isExpanded) return;

      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;
      lastScrollYRef.current = currentY;

      const height = header.offsetHeight || 100;
      headerOffsetRef.current = Math.min(Math.max(headerOffsetRef.current + delta, 0), height);

      if (currentY <= 0) headerOffsetRef.current = 0;

      header.style.transform = `translateY(-${headerOffsetRef.current}px)`;
      header.style.pointerEvents = headerOffsetRef.current >= height - 0.5 ? "none" : "auto";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      running = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, [isExpanded]);

  const handleNavigate = (path, event) => {
    if (event) event.preventDefault();
    setIsMenuOpen(false);
    menuTimelineRef.current?.reverse();
    setTimeout(() => {
      setIsExpanded(false);
      onNavigate(path);
    }, 300);
  };

  useLayoutEffect(() => {
    if (!menuPanelRef.current) return;
    gsap.set(menuPanelRef.current, { autoAlpha: 0, y: -8, pointerEvents: "none" });

    const tl = gsap.timeline({ paused: true });
    tl.to(menuPanelRef.current, {
      autoAlpha: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.24,
      ease: "power2.out",
    });

    menuTimelineRef.current = tl;
    return () => tl.kill();
  }, []);

  // Countdown-ajastin
  useEffect(() => {
    const target = new Date(2026, 9, 16, 0, 0, 0);
    const updateCountdown = () => {
      const now = new Date();
      let diff = target - now;
      if (diff < 0) diff = 0;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    if (!isExpanded) {
      setIsMenuOpen(true);
      setIsExpanded(true);
      menuTimelineRef.current.play(0);
    } else {
      setIsMenuOpen(false);
      menuTimelineRef.current.eventCallback("onReverseComplete", () => setIsExpanded(false));
      menuTimelineRef.current.reverse();
    }
  };

  return (
    <header ref={headerRef} className="header" role="banner">
      <div className="header-left">
        <a 
          href="/" 
          onClick={(e) => handleNavigate('/', e)} 
          aria-label="Junction Turku - Home"
        >
          <img 
            src={logo} 
            alt="Junction Turku Logo" 
            className="nav-logo" 
            width="180" 
            height="40"
            loading="eager"
          />
        </a>
      </div>

      <div className="header-center">
        <div className="countdown" aria-label="Countdown to event" role="timer">
          {timeLeft.days}d {String(timeLeft.hours).padStart(2,'0')}h {String(timeLeft.minutes).padStart(2,'0')}m {String(timeLeft.seconds).padStart(2,'0')}s
        </div>
      </div>

      <div className={`header-right ${isExpanded ? "open" : ""}`} ref={menuShellRef}>
        <button
          type="button"
          className={`header-hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation"
        >
          <span className="header-hamburger-line" />
          <span className="header-hamburger-line" />
        </button>

        <nav
          id="header-navigation"
          className={`header-dropdown ${isExpanded ? "open" : ""}`}
          ref={menuPanelRef}
          aria-hidden={!isMenuOpen}
        >
          {menuSections.map((section) => (
            <section className="header-menu-card" key={section.title}>
              <h2 className="header-menu-title">{section.title}</h2>
              <p className="header-menu-subtitle">{section.subtitle}</p>

              <div className="header-menu-links">
                {section.links.map((link) => {
                  const isExternal = link.path.startsWith('http');
                  return (
                    <a
                      key={link.path}
                      href={isExternal ? link.path : link.path}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onClick={(e) => !isExternal && handleNavigate(link.path, e)}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;