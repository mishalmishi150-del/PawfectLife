
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header({ search, setSearch }) {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/blog')
  }

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="announcement-message">
          <span className="announcement-paw">🐾</span>
          <span>Happy Pets. Happier Lives.</span>
        </div>

        <div className="announcement-right">
          <div className="announcement-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Pinterest">p</a>
          </div>

          <div className="announcement-legal">
            <Link to="/about">Privacy Policy</Link>
            <span>|</span>
            <Link to="/about">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="main-header">

        <Link to="/" className="logo">
          <svg
            className="logo-icon"
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

          <div className="logo-text">
            <h1>PawfectLife</h1>
            <p>Pet Care &amp; Animal Guides</p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="navigation">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/categories" className="category-nav-link">
            Categories <span className="dropdown-arrow">⌄</span>
          </NavLink>

          <NavLink to="/blog">
            Blog
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>

        {/* SEARCH */}
        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search here..."
            aria-label="Search articles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit" aria-label="Search">
            <span>⌕</span>
          </button>
        </form>

      </header>
    </>
  )
}

export default Header
