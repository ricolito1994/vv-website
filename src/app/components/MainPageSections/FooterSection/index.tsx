import React from 'react';
import '../../../styles/vvfooter.style.css';
import { Link } from 'react-router-dom';

const Footer = (): React.ReactElement => {
  return (
    <footer className="vv-footer">
      <div className="vv-footer-container">
        <div className="vv-footer-brand">
          <h2>MyWebsite</h2>
          <p>Building great experiences.</p>
        </div>

        <div className="vv-footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/accommodation">Accommodation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="vv-footer-newsletter">
          <h4>Subscribe</h4>
          <p>Get updates straight to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="vv-footer-social">
          <h4>Follow Us</h4>
          <div className="vv-footer-icons">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-github" /></a>
          </div>
        </div>
      </div>

      <div className="vv-footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
