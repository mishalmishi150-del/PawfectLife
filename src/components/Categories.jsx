
import { useLocation, useNavigate } from 'react-router-dom'

const categories = [
  {
    name: 'Dogs',
    detail: 'Care, Training & Health',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&crop=faces',
    alt: 'Golden Retriever dog'
  },
  {
    name: 'Cats',
    detail: 'Tips, Behavior & Health',
    image:
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop&crop=faces',
    alt: 'Cat sitting comfortably'
  },
  {
    name: 'Pet Grooming',
    detail: 'Grooming Tools & Tips',
    image: '/pet-grooming.jpg',
    alt: 'Dog being bathed and groomed'
  },
  {
    name: 'Pet Care Tips',
    detail: 'Daily Care & Wellness',
    image: '/pet-nutrition.jpg',
    alt: 'Pet food kibble in a bowl'
  }
]

function Categories({ setSelectedCategory, setSearch }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName)
    setSearch('')

    if (location.pathname === '/') {
      document.getElementById('blog')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      navigate('/blog')
    }
  }

  return (
    <section className="categories" id="categories">
      <div className="section-heading">
        <span className="heading-paw">🐾</span>

        <div>
          <h2>Browse by Category</h2>
          <p>Find the right information for your pet</p>
        </div>

        <span className="heading-paw">🐾</span>
      </div>

      <div className="category-container">
        {categories.map((category) => (
          <button
            type="button"
            className="category-card"
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            aria-label={`Explore ${category.name}`}
          >
            <div className="category-image">
              <img
                src={category.image}
                alt={category.alt}
                loading="lazy"
              />
            </div>

            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.detail}</p>
            </div>

            <span className="category-arrow" aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Categories
