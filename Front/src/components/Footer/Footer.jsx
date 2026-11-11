import "./Footer.css";
import logo from "../../assets/trovetext.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a href="/" className="footer__brand">
          <img src={logo} alt="TROVE Logo" className="footer__logo" />
        </a>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="/men">Men</a>
          </li>
          <li className="footer__item">
            <a href="/women">Women</a>
          </li>
          <li className="footer__item">
            <a href="/youth">Youth</a>
          </li>
             <li className="footer__item">
            <a href="/outdoor">Outdoor</a>
          </li>
          </ul>
          <ul className="footer__list">
       
          <li className="footer__item">
            <a href="/about">About</a>
          </li>
          <li className="footer__item">
            <a href="/contact">Contact</a>
          </li>
          <li className="footer__item">
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>

      <hr className="footer__divider" />

    <div className="footer__credits">
       <p className="footer__label">&copy; 2026 TROVE. All rights reserved.</p>
      <ul className="footer__social">
       
        <li className="footer__social-item">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className="footer__social-item">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className="footer__social-item">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
    </footer>
  );
}

export default Footer;
