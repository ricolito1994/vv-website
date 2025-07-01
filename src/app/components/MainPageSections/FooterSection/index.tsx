import React, {useContext} from 'react';
import '../../../styles/mainpage.footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import { AppContext } from "app/context";

const Footer: React.FC = () => {

  const {OFFICIAL_VV_LOGO} = useContext(AppContext);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo and Tagline */}
        <div className="footer-column">
          <img src={OFFICIAL_VV_LOGO} alt="Logo" className="footer-logo" />
          <p className="footer-tagline">Relaxing Highland Getaway</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{ fontSize: 24, color: '#ccc' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon style={{ fontSize: 24, color: '#ccc' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ fontSize: 24, color: '#ccc' }} />
            </a>
          </div>
        </div>

        {/* Column 2: Address and Contact */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <p>Don Salvador Benedicto, Negros Occidental, Philippines</p>
            <p>Phone: (+63) 951 002 7409</p>
            <p>Email: bookings.vistavilla@gmail.com</p>
          </div>
        </div>

        {/* Column 3: Links */}
        <div className="footer-column">
          <h4>Accommodations</h4>
          <ul>
            <li><a href="/gallery">Summit Villa</a></li>
            <li><a href="/newsletter">Highland Cabin</a></li>
            <li><a href="/offers">Hideaway Suite</a></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Data Privacy</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Vista Villa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

