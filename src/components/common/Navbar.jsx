import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  // Refs for audio and navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <nav className="nav-container" ref={navContainerRef}>
      <header className="nav-header">
        <nav className="nav-inner">
          {/* <!-- Logo and Product Button --> */}
          <div className="logo-container">
            <img src="/img/logo.png" alt="logo" className="logo" />
          </div>

          {/* <!-- Navigation Links --> */}
          <div className="nav-links-container">
            <div className="nav-links">
              {/* <!-- Replace `navItems` with actual nav items --> */}
              <a href="#item1" className="nav-link">
                Item 1
              </a>
              <a href="#item2" className="nav-link">
                Item 2
              </a>
              <a href="#item3" className="nav-link">
                Item 3
              </a>
            </div>
          </div>

          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>
    </nav>
  );
};

export default NavBar;
