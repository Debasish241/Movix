import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Created By Debasish Debnath ,Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+
Copyright © 2023 Movix Entertainment Enterprises Ltd. All rights reserved.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/DebasishDebnath2001?mibextid=ZbWKwL">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    </a>

                    <a href="https://www.instagram.com/__iamdebasishdebnath__/?hl=en">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    

                    <a href="https://twitter.com/Debasis98285683">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>

                    <a href="https://www.linkedin.com/in/debasish-debnath-02b000202/">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                    
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;