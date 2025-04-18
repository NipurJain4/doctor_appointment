import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/doctors"}>Doctors</NavLink></li>
            <li><NavLink to={"/appointments"}>Appointments</NavLink></li>
            <li><NavLink to={"/notifications"}>Notifications</NavLink></li>
            <li><NavLink to={"/profile"}>Profile</NavLink></li>
            <li><HashLink to={"/#contact"}>Contact Us</HashLink></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Smart Healthcare Solution is an all-in-one platform to manage</p>
            <p>doctor appointments and patient registration.
          </p>
          <p><FaPhoneAlt /> +91-9876543210</p>
          <p><FaEnvelope /> support@smarthealth.com</p>
        </div>

        {/* Support Links */}
        <div className="footer-support">
          <h3>Support</h3>
          <ul>
            <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/help">Help Center</NavLink></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="social">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li className="facebook">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li className="youtube">
              <a href="https://www.youtube.com/@nipurjain5788/" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com/_nipur_jain_/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <div className="newsletter">
            <h4>Subscribe to Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/nipur-jain-084b20223/" target="_blank" rel="noreferrer">
          Tech Trio
        </a>{" "}
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
