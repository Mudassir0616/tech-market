import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // Refs for audio and navigation container
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);
  menuItemsRef.current = [];

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const addToRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY && !isOpen) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY && !isOpen) {
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

  // Toggle Mobile Menu with Animation
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%", y: "-100%", opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        menuItemsRef.current,
        {
          opacity: 0,
          transform:
            "translate3d(10px, 1px, -60px) rotateY(-60deg) rotateX(-40deg)",
          transformOrigin: "50% 50% -150px",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        ease: "power3.in",
      });

      gsap.to(menuItemsRef.current, {
        opacity: 1,
        transform:
          "translate3d(10px, 1px, -60px) rotateY(-60deg) rotateX(40deg)",
        transformOrigin: "50% 50% 150px",
        duration: 0.3,
        ease: "power3.in",
      });
    }

    // if (!isOpen) {
    //   gsap.to(menuItemsRef.current, {
    //     opacity: 0,
    //     transform:
    //       "translate3d(10px, 1px, -60px) rotateY(-60deg) rotateX(40deg)",
    //     transformOrigin: "50% 50% 150px",
    //   });
    // }
  }, [isOpen]);

  return (
    <nav className={`nav-container ${isOpen ? "active" : ""}`}>
      <header className="nav-header" ref={navContainerRef}>
        <nav className="nav-inner">
          {/* <!-- Logo and Product Button --> */}
          <div className="logo-container">
            <img src="/img/logo.png" alt="logo" className="logo" />
          </div>

          {/* <!-- Navigation Links --> */}
          <div className="nav-links-container">
            <div className="nav-links">
              {/* <!-- Replace `navItems` with actual nav items --> */}
              <a href={"/"} className="nav-link">
                Home
              </a>
              <a href={"/about-us"} className="nav-link">
                About Us
              </a>
              <a href={"/blogs"} className="nav-link">
                Blogs
              </a>
            </div>
          </div>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </nav>
      </header>

      <div
        className={`nav-mobile-menu ${isOpen ? "open" : ""}`}
        ref={mobileMenuRef}
      >
        <ul>
          <li ref={addToRefs}>
            <a href={"/"} onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li ref={addToRefs}>
            <a href={"/about-us"} onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li ref={addToRefs}>
            <a href={"/blogs"} onClick={() => setIsOpen(false)}>
              Blogs
            </a>
          </li>
          {/* <li>
              <button
                className="white-cta"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </button>
            </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
