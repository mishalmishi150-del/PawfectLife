
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        {/* COLUMN 1 - BRAND */}
        <div className="footer-column footer-brand">
          <Link to="/" className="footer-logo">
            <svg
              className="footer-paw-icon"
              viewBox="0 0 64 64"
              aria-label="PawfectLife logo"
              role="img"
            >
              <ellipse cx="32" cy="42" rx="15" ry="12" fill="currentColor" />
              <ellipse cx="13" cy="25" rx="7" ry="9" fill="currentColor" />
              <ellipse cx="26" cy="14" rx="7" ry="9" fill="currentColor" />
              <ellipse cx="41" cy="14" rx="7" ry="9" fill="currentColor" />
              <ellipse cx="53" cy="26" rx="7" ry="9" fill="currentColor" />
            </svg>

            <span>PawfectLife</span>
          </Link>

          <p className="footer-tagline">
            Pet Care &amp; Animal Guides
          </p>

          <p className="footer-description">
            Your friendly guide to better pet care, healthier animals
            and happier lives together.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Pinterest">p</a>
          </div>
        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 - CATEGORIES */}
        <div className="footer-column">
          <h3>Categories</h3>

          <ul>
            <li><Link to="/categories">Dogs</Link></li>
            <li><Link to="/categories">Cats</Link></li>
            <li><Link to="/categories">Pet Grooming</Link></li>
            <li><Link to="/categories">Pet Care Tips</Link></li>
            <li><Link to="/categories">Pet Health</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 - LEGAL */}
        <div className="footer-column">
          <h3>Legal</h3>

          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 5 - USEFUL FILES */}
        <div className="footer-column">
          <h3>Useful Files</h3>

          <ul>
            <li>
              <a href="/sitemap.xml" target="_blank" rel="noreferrer">
                Sitemap.xml
              </a>
            </li>

            <li>
              <a href="/robots.txt" target="_blank" rel="noreferrer">
                Robots.txt
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 PawfectLife. All Rights Reserved.</p>

        <p className="footer-love">
          <span>🐾</span> Love <span>•</span> Care <span>•</span> Together
        </p>
      </div>
    </footer>
  )
}

export default Footer
