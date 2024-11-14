import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
// import Icon from "../assets/icon.svg";
import weigh from "../assets/weigh.png";
import { AiOutlineCheck } from "react-icons/ai";

import {
  FaChartLine,
  FaCoins,
  FaEnvelope,
  FaFileAlt,
  FaInstagram,
  FaMoneyBill,
  FaShieldAlt,
  FaTelegram,
  FaThList,
  FaUser,
  FaWallet,
  FaWhatsapp,
} from "react-icons/fa";
import { useState, useEffect } from "react";
// import { useRef } from "react";
// import Preload from "./preload";
import rakuten from "../assets/rakuten.png";
import binance from "../assets/binance.png";
import caseware from "../assets/caseware.png";
import galaxy from "../assets/galaxy.png";
import trust from "../assets/trustwallet.png";
import block from "../assets/blcokchain.png";
import theblock from "../assets/theblock.webp";
import heroImage from "../assets/hero-1.png";
import star1 from "../assets/Star 4.png";
import star2 from "../assets/Star 5.svg";
import star3 from "../assets/Star 6.png";
import FAQ from "./faq";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


function Home() {
  const testimonials = [
    {
      index: 1,
      author: "Jane Williams",
      content:
        "I totally recommend CyberHelp hacking services. They are reliable ethical hackers. I was able to recover my lost bitcoin in an investment fraud.",
      location: "London, UK",
      img_url: "../assets/african-american-man-wearing-round-glasses.jpg",
    },
    {
      index: 2,
      author: "Liam Johnson",
      content:
        "I had a great experience with CyberHelp hacking services. Their team of experts helped me regain access to my compromised account and secured it from further threats.",
      location: "Sydney, Australia",
      img_url: "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg",
    },
    {
      index: 3,
      author: "Sophia Martinez",
      content:
        "Thanks to CyberHelp, I recovered my stolen funds. They are highly professional and provided excellent customer support throughout the recovery process.",
      location: "Toronto, Canada",
      img_url: "https://example.com/sophia-martinez.jpg",
    },
    {
      index: 4,
      author: "Noah Davis",
      content:
        "I highly recommend CyberHelp for their outstanding hacking services. They helped me recover important documents that were lost due to a security breach.",
      location: "Paris, France",
      img_url: "https://example.com/noah-davis.jpg",
    },
    {
      index: 5,
      author: "Ava Wilson",
      content:
        "CyberHelp is the best in the business! Their expertise in cryptocurrency recovery is unmatched. They successfully recovered my stolen coins from a scammer.",
      location: "Tokyo, Japan",
      img_url: "https://example.com/ava-wilson.jpg",
    },
    {
      index: 6,
      author: "Olivia Thompson",
      content:
        "CyberHelp is the best in the business! Their expertise in cryptocurrency recovery is unmatched. They successfully recovered my stolen coins from a scammer.",
      location: "New York, USA",
      img_url: "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg",
    },
  ];

  // const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevslide = () => {
    setActiveSlide((prevslide) =>
      prevslide === 0 ? testimonials.length - 1 : prevslide - 1
    );
  };
  const handleNextSlide = () => {
    setActiveSlide((prevslide) =>
      prevslide === testimonials.length - 1 ? 0 : prevslide + 1
    );
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((el) => observer.observe(el));

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    console.log("hello");
    navigate(path);
  };
  return (
    <div>
      <section className="herosect">
        <div className="container hersectcontainer">
          <div className=" hersectcontainer-text">
            <span className="hs">hs</span>
            <h1 className={`herohead ${shouldAnimate ? "animate" : ""}`}>
              Recover And Invest Your Crypto Assets
            </h1>

            <p className={`heroparagraph ${shouldAnimate ? "animate" : ""}`}>
              We provide cryptocurrency services, including mining, hacking, and
              asset recovery for scam victims. Our experienced team helps you
              reclaim stolen assets and offers investment guidance for higher
              returns. Contact us for assistance
            </p>
            <div className="herobu">
              <button id="herobutton">
                <a href="#testimonials">Testimonial</a>
              </button>
              <button
                id="herobutton"
                className="herobtn"
                onClick={() => handleNavigate("/services")}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="hero-">
            {/* <lottie-player
              src="https://lottie.host/2d8d7429-25c2-4f55-9030-7685b715f4ac/pVOs6wbXoK.json"
              background="transparent"
              speed="1"
              style={{ width: '500px', height: '500px' }}
              loop
              autoplay
            ></lottie-player> */}
            <DotLottieReact
              src="https://lottie.host/2d8d7429-25c2-4f55-9030-7685b715f4ac/pVOs6wbXoK.json"
              loop
              autoplay
            />
            {/* <img src={heroImage} className="heroimage" alt="" /> */}
            <span className="">
              <NavLink to="https://api.whatsapp.com/send?phone=8562097916145&text=%20">
                <span className="iconsocial">
                  <FaWhatsapp size={35} color="#ffff" />
                </span>
              </NavLink>
              <NavLink to="https://t.me/+79216482743">
                <span className="iconsocial">
                  <FaTelegram color="#ffff" size={35} />
                </span>
              </NavLink>
              <NavLink to="https://instagram.com/cyber_helponline">
                <span className="iconsocial">
                  <FaInstagram size={35} color="#ffff" />
                </span>
              </NavLink>
              <NavLink to="mailto:support@cyberhelponline.org">
                <span className="iconsocial">
                  <FaEnvelope size={35} color="#ffff" />
                </span>
              </NavLink>
              {/* <NavLink to="#"><span className="iconsocial"><FaTwitter  size={32} color="white"/></span></NavLink> */}
            </span>
            <img src={star1} alt="" className="topright" />
            <img src={star2} alt="" className="bottomlefty" />
            <img src={star3} alt="" className="bottomleft" />
          </div>
        </div>
      </section>

      <section className="partners">
        {/* <div className="publications">
          <p>Trusted by 100+ publications</p>
          <div className="pubs">
            <a href="https://www.theblock.co/post/134443/the-wild-adventures-of-a-father-son-duo-that-go-searc">
              <img src={theblock} alt="" />
            </a>
            <a href="https://hypebeast.com/2021/9/bitcoin-wallet-hacker-chris-charlie-crypto-asset-recovery">
            </a>
            <a href="https://www.vice.com/en/article/5dgeqq/meet-the-father-and-son-team-breaking-into-crypto-wallets">
              <img src="../assets/motherboard.webp" alt="" />
            </a>
            <a href="https://www.bbc.com/news/technology-60318946">BBC</a>
            <a href="https://www.forbes.com/sites/waynerash/2022/12/28/crypto-asset-recovery-helps-confront-cryptocurremcys-greatest-fear--losing-your-password/?sh=6fee46a01827">
              FORBES
            </a>
            <a href="https://currency.com/crypto-bounty-hunting">
              CURRENCY.COM
            </a>
          </div>
        </div> */}
        <div className="container lifePartners">
          <h4 style={{ color: 'black' }}>Our partners and supporters</h4>
          {/* PARTNERS */}
          <div className="partners-img">
            <img src={rakuten} alt="" />
            <img src={binance} alt="" />
            <img src={caseware} alt="" />
            <img src={galaxy} alt="" />
            <img src={trust} alt="" />
            <img src={block} alt="" />
          </div>
        </div>
      </section>
      {/* <hr className="container"/> */}

      <section className="goalsect" id="goalsect">
        <div className="container goalconta">
          <h2 id="goalhead" className={`${shouldAnimate ? "animate" : ""}`}>
            About Us
          </h2>
          <p id="goalparaph" className={`${shouldAnimate ? "animate" : ""}`}>
            For over 5 years, CyberHelp has established itself as a prominent
            platform for recovery and investment services. Our unwavering
            commitment to providing individuals with effective solutions to
            their grievances, including those pertaining to cryptocurrency, has
            been a hallmark of our operation.
          </p>
          <div className="visions">
            <img className="weigh" src={weigh} alt="" />
            <div className="objectives">
              <span className="hs"></span>
              <p className="hidden">
                Our objective is to foster an informed community that is
                equipped to identify and combat fraudulent activities while also
                promoting awareness and understanding of digital currencies.
              </p>
              <p className="hidden">
                We offer expedited recovery of lost cryptocurrencies and
                passwords without upfront fees, ensuring a resolution within 72
                hours.
              </p>
              <p className="hidden">
                Crypto Recovery, hacking services, crypto investment, crypto
                mining, and more...
              </p>
              <p className="hidden">
                We have successfully resolved over 500,000 issues.
              </p>
              <p className="hidden">
                Our customer support team is available round the clock, every
                day of the year, to assist you with any issues you may be
                facing.
              </p>
              <button className="hidden">
                <NavLink to="/contact">Contact us</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="worksect">
        <div className="container workcont">
          <h2>How it Works</h2>
          <p>
            We invite you to reach out to us with any concerns you may have, as
            we are confident in our capacity to provide effective solutions and
            alleviate any anxieties you may be experiencing.
          </p>
          <div className="works">
            <span className="hs hswww"></span>
            <div className="work hidden">
              <NavLink to="/contact">
                <FaFileAlt color="aqua" size={32} />
                <h3>File a complaint</h3>
                <p>
                  Our easy-to-use complaint filing system allows you to quickly
                  and easily submit your concerns to our team.
                </p>
              </NavLink>
            </div>
            <div className="work hidden">
              <NavLink to="/contact">
                <AiOutlineCheck size={24} />{" "}
                <h3>Process and Review complaint</h3>
                <p>
                  Our easy-to-use complaint filing system allows you to quickly
                  and easily submit your concerns to our team.
                </p>
              </NavLink>
            </div>
            <div className="work hidden">
              <NavLink to="/contact">
                <FaCoins size={32} color="gold" />
                <h3>Complaint Resolved</h3>
                <p>
                  Our easy-to-use complaint filing system allows you to quickly
                  and easily submit your concerns to our team.
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section class="services-section">
        <div className="hwhw">
          <span className="hs"></span>
          <p>
            <FaShieldAlt />
            Our services
          </p>
          <h3 className="headdddd">We Offer an extensive range of services</h3>
          <p className="paraaaa">
            We offer tailored solutions to recover all kinds of assets, and we
            accompany you throughout the whole process. Get a Free Consultation
          </p>
          <button className="btnnnnn">
            <a href="/contact">Get a free consultation</a>
          </button>
        </div>
        <div class="service-cards">
          <div class="service-card">
            <span>
              <div class="icon-container">
                <FaWallet />
              </div>
              <h3>Wallet Recovery</h3>
              <p>
                Our advanced techniques are used to recover lost or forgotten
                phrases, private keys, and passwords.
              </p>
              <h4>
                <a href="/services">
                  Learn more <span>&#10148;</span>
                </a>
              </h4>
            </span>
          </div>
          <div class="service-card">
            <span>
              <div class="icon-container">
                <FaChartLine />
              </div>
              <h3>Asset Recovery</h3>
              <p>
                We have the expertise to trace stolen assets and work with law
                enforcements to recover your funds.
              </p>
              <h4>
                <a href="/services">
                  Learn more <span>&#10148;</span>
                </a>
              </h4>
            </span>
          </div>
          <div class="service-card">
            <span>
              <div class="icon-container">
                <FaThList />
              </div>
              <h3>Asset Consultation</h3>
              <p>
                We provide valuable insights, analysis, and tailored consulting
                services to help you make informed decisions about your
                investments.
              </p>
              <h4>
                <a href="/services">
                  Learn more <span>&#10148;</span>
                </a>
              </h4>
            </span>
          </div>
          <div class="service-card">
            <span>
              <div class="icon-container">
                <FaMoneyBill />
              </div>
              <h3>Transactions Glitch</h3>
              <p>
                We provide valuable insights, analysis, and tailored consulting
                services to help you make informed decisions about your
                investments.
              </p>
              <h4>
                <a href="/services">
                  Learn more <span>&#10148;</span>
                </a>
              </h4>
            </span>
          </div>
        </div>
      </section>
      <FAQ />
      <section className="testisect" id="testimonials">
        <div className="container testi-container">
          <p style={{ color: "white", textDecoration: "underline" }}>
            TESTIMONIALS
          </p>
          <h2 style={{ color: "white" }}>What they say about us</h2>
          <div className="car-container">
            {testimonials.map((testimony, index) => {
              return (
                <div
                  key={index}
                  className={`carousel ${index === activeSlide ? "active" : ""
                    }`}
                >
                  <p>{testimony.content}</p>
                  <div className="author">
                    <FaUser className="img" />
                    <span>
                      <p>{testimony.author}</p>
                      <p>{testimony.location}</p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btnsysy">
            <button onClick={handlePrevslide}>prev</button>
            <button onClick={handleNextSlide}>next</button>
          </div>
          <div className="tracar-container">
            {testimonials.map((testimony, index) => {
              return (
                <div
                  key={index}
                  className={`carousell ${index === activeSlide ? "active" : ""
                    }`}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
