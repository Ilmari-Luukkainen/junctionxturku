import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "./assets/JUNCTIONx_logos-emblem-white.svg";
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
        { label: "Instagram", path: "https://www.instagram.com/junctionxturku?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { label: "LinkedIn", path: "https://www.linkedin.com/company/junction-x-turku/" },
        { label: "𝕏", path: "https://www.x.com/junctionturku" }
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

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    let running = true;
    lastScrollYRef.current = window.scrollY;
    headerOffsetRef.current = 0;

    const onScroll = () => {
      if (!running) return;

      // When menu is expanded, keep header fully visible
      if (isExpanded) {
        header.style.transition = "";
        header.style.transform = "translateY(0px)";
        header.style.pointerEvents = "auto";
        headerOffsetRef.current = 0;
        lastScrollYRef.current = window.scrollY;
        return;
      }

      // Disable CSS transition while syncing transform to scroll
      header.style.transition = "none";

      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;
      lastScrollYRef.current = currentY;

      const height = header.offsetHeight || 100;
      headerOffsetRef.current = Math.min(Math.max(headerOffsetRef.current + delta, 0), height);

      // Always fully visible at page top
      if (currentY === 0) {
        headerOffsetRef.current = 0;
      }

      header.style.transform = `translateY(-${headerOffsetRef.current}px)`;
      header.style.pointerEvents = headerOffsetRef.current >= height - 0.5 ? "none" : "auto";
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // ensure visible on mount
    header.style.transform = "translateY(0px)";

    return () => {
      running = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, [isExpanded]);

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

  // Countdown to 16 October 2026
  useEffect(() => {
    const target = new Date(2026, 9, 16, 0, 0, 0); // October is month 9 (0-based)

    const updateCountdown = () => {
      const now = new Date();
      let diff = target - now;
      if (diff < 0) diff = 0;
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

  const isCountdownActive =
    timeLeft.days > 0 ||
    timeLeft.hours > 0 ||
    timeLeft.minutes > 0 ||
    timeLeft.seconds > 0;

  return (
    <header ref={headerRef} className="header">
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
        {isCountdownActive && (
          <div className="countdown" aria-live="polite">
            {timeLeft.days}d {String(timeLeft.hours).padStart(2,'0')}h {String(timeLeft.minutes).padStart(2,'0')}m {String(timeLeft.seconds).padStart(2,'0')}s
          </div>
        )}
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
                {section.links.map((link) => {
                  const isExternal = /^(https?:)?\/\//.test(link.path) || link.path.startsWith("mailto:") || link.path.startsWith("tel:");
                  const isHash = link.path && link.path.startsWith('#');
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onClick={(event) => {
                        if (isExternal) return;

                        if (isHash || link.path.includes('#')) {
                          event.preventDefault();
                          
                          const isActuallyOnHomePage = window.location.pathname === '/' || window.location.pathname === '';
                          
                          if (isActuallyOnHomePage) {
                            const hash = link.path.includes('#') ? link.path.split('#')[1] : link.path.replace('#', '');
                            const el = document.getElementById(hash);
                            if (el) {
                              const top = el.getBoundingClientRect().top + window.scrollY;
                              window.scrollTo({ top, behavior: 'smooth' });
                            }
                          } else {
                            navigate(link.path); 
                          }

                          setIsMenuOpen(false);
                          menuTimelineRef.current?.reverse();
                          setTimeout(() => setIsExpanded(false), 300);
                          return;
                        }

  event.preventDefault();
  navigate(link.path);
}}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;