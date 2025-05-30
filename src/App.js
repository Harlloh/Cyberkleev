import {
  BrowserRouter,
  Routes,
  NavLink,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/cryptoservices";
import Blog from "./components/blog";
import Services from "./components/services";
import Contact from "./components/contact";
import Icon from "./assets/icon.svg";
import {
  FaBars,
  FaEnvelope,
  FaHamburger,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaShieldAlt,
  FaTelegram,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import Cryptoservices from "./components/cryptoservices";
import { useState } from "react";
import Preload from "./components/preload";
import { useEffect } from "react";
import FAQ from "./components/faq";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const nav = document.getElementById("nav");
  const handleNav = () => {
    setShowNav((prevstate) => !prevstate);
  };

  const handleLinkClick = () => {
    setShowNav(false);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Preload />
      ) : (
        <div>
          <header>
            <div className="container headersect">
              <div className="logo">
                <NavLink to="/">
                  {/* <img src={Icon} alt="" /> */}
                  <FaShieldAlt color="#AD60A9" size="2rem" />
                  <h1>ShieldCrypt</h1>
                </NavLink>
              </div>
              <span className="ham">
                {showNav ? (
                  <FaTimes
                    className="cancel"
                    onClick={handleNav}
                    color="white"
                    size={32}
                  />
                ) : (
                  <FaBars onClick={handleNav} color="white" size={32} />
                )}
              </span>
              <nav id="nav" className={`${showNav ? "slideright" : ""}`}>
                <ul>
                  <li>
                    <NavLink onClick={handleLinkClick} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <a onClick={handleLinkClick} href="#goalsect">
                      {" "}
                      About us
                    </a>
                  </li>
                  <li>
                    <NavLink onClick={handleLinkClick} to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleLinkClick} to="/blogs">
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleLinkClick} to="/faq">
                      FAQs
                    </NavLink>
                  </li>
                  <li>
                    <button>
                      <NavLink onClick={handleLinkClick} to="/contact">
                        Contact
                      </NavLink>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/crypto-services" element={<Cryptoservices />}></Route>
            <Route path="/blogs" element={<Blog />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
          </Routes>
          <footer id="about">
            {/* <span className="hs">hs</span> */}
            <div className="container footcontainer">
              <div className="socials">
                <div className="logo">
                  <NavLink to="/">
                    <FaShieldAlt color="#AD60A9" size="2rem" />
                    <h1 className="footheader">ShieldCrypt</h1>
                  </NavLink>
                </div>
                <p>“The one who owns the information, owns the world!”</p>
                <span>
                  <NavLink to="https://wa.me/8562054097092">
                    <span className="iconsocial">
                      <FaWhatsapp size={45} color="#12132A" />
                    </span>
                  </NavLink>
                  <NavLink to="https://t.me/+79216482743">
                    <span className="iconsocial">
                      <FaTelegram color="#12132A" size={45} />
                    </span>
                  </NavLink>
                  {/* <NavLink to="https://instagram.com/cyber_helponline">
                    <span className="iconsocial">
                      <FaInstagram size={45} color="#12132A" />
                    </span>
                  </NavLink> */}
                  <NavLink to="mailto:support@shieldcrypt.help">
                    <span className="iconsocial">
                      <FaEnvelope size={45} color="#12132A" />
                    </span>
                  </NavLink>
                  {/* <NavLink to="#"><span className="iconsocial"><FaTwitter  size={32} color="white"/></span></NavLink> */}
                </span>
              </div>
              <div className="quickLinks">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <Link href="#about"> About us</Link>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQs</NavLink>
                  </li>
                </ul>
              </div>
              <div className="ourservices">
                <h2>Our Services</h2>
                <ul>
                  <li>Crypto Services</li>
                  <li>Hacking and Blackmail</li>
                  <li>Wallet Recovery</li>
                  <li>Asset Recovery</li>
                  <li>Asset Consultation</li>
                </ul>
              </div>
              <div className="contactus">
                <h2>Get in Touch</h2>
                <NavLink className="contactMail" to="#">
                  <FaMapMarkerAlt size={15} color="black" />
                  <p style={{ color: "black" }}>
                    Sytinskiy Lane, 5 с2, Moscow Russia 123104
                  </p>
                </NavLink>
                <NavLink
                  className="contactMail"
                  to="mailto:support@shieldcrypt.help"
                >
                  <FaEnvelope size={15} color="black" />
                  <p style={{ color: "black" }}>support@shieldcrypt.help</p>
                </NavLink>
                <button>
                  <NavLink to="https://t.me/+79216482743">Contact</NavLink>
                </button>
              </div>
            </div>
          </footer>
          <div className="copyright">
            <p>ShieldCrypt © Copyright 2025. All rights reserved</p>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
