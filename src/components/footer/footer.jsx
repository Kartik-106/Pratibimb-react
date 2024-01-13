import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="address">
                    <div className="logo_footer">
                        <img src="/img/Pratibimb_logo_shirt.png" alt="" />
                    </div>
                    <div className="college_address">
                        <a href="https://maps.app.goo.gl/jfoSjhgDAdBVxXaKA">
                            <MapPin
                                size={20}
                                color="#f7eded"
                                strokeWidth={2}
                                absoluteStrokeWidth
                            />{" "}
                            <span>Locate Us</span>
                            <br />
                        </a>
                        SGSITS 23, M.Visvesvaraya Marg
                        <br />
                        Indore, Madhya Pradesh
                        <br />
                        452003
                    </div>
                    <div className="mail">
                        <a href="mailto:clubpratibimb.sgsits@gmail.com">
                            <Mail color="#f7eded" strokeWidth={1.25} absoluteStrokeWidth />
                        </a>
                        <span>clubpratibimb.sgsits@gmail.com</span>
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
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
                    <div className="social-media-footer"><ul className="social media">
                        <li>
                            <a href="https://www.instagram.com/pratibimb_sgsits/">
                                <Instagram color="#f7eded" strokeWidth={2.25} absoluteStrokeWidth />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC8G1RNk4rsWmz84_3zMbabg">
                                <Youtube color="#f7eded" strokeWidth={1.25} absoluteStrokeWidth />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/pratibimb.sgsits/">
                                <Facebook color="#f7eded" strokeWidth={1.25} absoluteStrokeWidth />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/clubpratibimb?originalSubdomain=in">
                                <Linkedin color="#f7eded" strokeWidth={1.25} absoluteStrokeWidth />
                            </a>
                        </li>
                    </ul></div>
                </div>
                <div className="social-media">social media</div>
            </div>
        </>
    );
};

export default Footer;
