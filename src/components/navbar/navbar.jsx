import React,{useState} from "react";
import Home from "../../Pages/home/home";
import logo_pratibimb from "./Pratibimb_logo_shirt.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./navbar.css";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Facebook, Instagram, Linkedin, Youtube, YoutubeIcon } from "lucide-react";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/*Logo*/}
        <div className="logo">
          <a href="">
            <img src="/img/Pratibimb_logo_shirt.png" alt="Pratibimb" />
          </a>
        </div>

        {/*components navigation */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/events">Event</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/*Social Media Links */}
        <div className="social-media-links">
          <ul className="social media">
            <li>
              <a href="https://www.instagram.com/pratibimb_sgsits/">
                <Instagram size={21} strokeWidth={1.5}  className="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UC8G1RNk4rsWmz84_3zMbabg">
                <Youtube size={21} strokeWidth={1.5} className="Youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/pratibimb.sgsits/">
                <Facebook size={21} strokeWidth={1.5} className="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/clubpratibimb?originalSubdomain=in">
                <Linkedin size={21} strokeWidth={1.5} className="Linkdin" />
                
              </a>
            </li>
          </ul>


          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
