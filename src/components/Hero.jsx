
import './Hero.css'

function Hero() {
  return (
    <section className="welcome">

      <div className="welcome-image">
        <img
          src="/pets-hero.jpg"
          alt="Golden Retriever, cat, rabbit and guinea pig together"
        />
      </div>

      <div className="hero-paw hero-paw-one">🐾</div>
      <div className="hero-paw hero-paw-two">🐾</div>
      <div className="hero-paw hero-paw-three">🐾</div>

      <div className="welcome-content">
        <span className="welcome-label">WELCOME, PET LOVERS</span>

        <h2>
          Welcome to Pawfect<span>Life</span>
        </h2>

        <p>
          Discover helpful tips, expert advice, and loving guidance
          to keep your furry companions happy, healthy, and cared for
          every day.
        </p>

        <a href="/categories" className="explore-btn">
          Explore Our Guides <span className="button-arrow">→</span>
        </a>
      </div>

      <div className="hero-note">
        Care Today...<br />
        Companionship Forever <span>♥</span>
      </div>

      <div className="hero-wave"></div>
    </section>
  )
}

export default Hero
