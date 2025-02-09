import { NavLink } from "react-router-dom";
import Icon from "../assets/icon.svg"
import 'react-icons';
import { FaWhatsapp } from "react-icons/fa";
function About() {
    return (
        <footer id="about">
            <div className="container footcontainer">
                <div className="socials">
                    <NavLink to="https://wa.me/8562054097092"><FaWhatsapp /></NavLink>
                    <NavLink to="#">Telegram</NavLink>
                    <NavLink to="#">Instagram</NavLink>
                    <NavLink to="#">Twitter</NavLink>
                </div>
                <cite>“The one who owns the information, owns the world!”</cite>
                <NavLink to="#">
                    <img src={Icon} alt="" />
                    <p>+1 501-512-0642</p>
                </NavLink>
                <NavLink to="#">
                    <img src={Icon} alt="" />
                    <p>support@shieldcrypt.help</p>
                </NavLink>
                <div className="copyright">
                    <p>ShieldCrypt © Copyright 2023. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default About;