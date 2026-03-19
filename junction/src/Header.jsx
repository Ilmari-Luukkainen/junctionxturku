import { useEffect, useState } from "react";

function Header({ onNavigate }) {
  const [visible, setVisible] = useState(true);
  let timeout = null;

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

  return (
    <header className={`header ${visible ? "show" : "hide"}`}>
      <h1>Mun header</h1>
      <nav className="main-nav">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('/');
          }}
        >
          Etusivu
        </a>
        <a
          href="/Challenges"
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