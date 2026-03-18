import { useEffect, useState } from "react";

function Header() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;
  let timeout = null;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
        setVisible(false);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(true);
      }, 500); 

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${visible ? "show" : "hide"}`}>
      <h1>Mun header</h1>
    </header>
  );
}

export default Header;