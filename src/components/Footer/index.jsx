import React from "react";
import {
  EnvelopeFill,
  Facebook,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import FooterLinks from "../FooterLinks";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h4>Explore</h4>
        <FooterLinks/>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>
          <EnvelopeFill />
          <span className="ms-2">Email</span>
        </p>
        <p>
          <Whatsapp />
          <span className="ms-2">Whatsapp</span>
        </p>
      </div>

      <div className="footer-section">
        <h4>Social Media</h4>
        <p>
          <Facebook />
          <span className="ms-2">Facebook</span>
        </p>
        <p>
          <Twitter />
          <span className="ms-2">Twitter</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
