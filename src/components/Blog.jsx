
import { Link } from 'react-router-dom'

const articles = [
  {
    title: 'Essential Dog Care Tips for Beginners',
    category: 'Dogs',
    description:
      'Learn about feeding, exercise, grooming and keeping your dog healthy.',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=500&fit=crop&crop=faces',
    alt: 'Golden Retriever dog',
    slug: 'dog-care'
  },
  {
    title: 'Understanding Your Cat’s Behavior',
    category: 'Cats',
    description:
      'Understand common cat behaviors and how to keep your cat comfortable.',
    image:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=500&fit=crop&crop=faces',
    alt: 'Cat looking at the camera',
    slug: 'cat-behavior'
  },
  {
    title: 'A Complete Guide to Pet Grooming',
    category: 'Pet Grooming',
    description:
      'Discover simple grooming habits for a clean and happy pet.',
    image: '/pet-grooming.jpg',
    alt: 'Dog grooming and pet hygiene',
    slug: 'pet-grooming'
  },
  {
    title: 'Understanding Basic Pet Nutrition',
    category: 'Pet Care Tips',
    description:
      'Learn the basics of balanced nutrition for your pets.',
    image: '/pet-nutrition.jpg',
    alt: 'Dry pet food kibble in a bowl',
    slug: 'pet-nutrition'
  },
  {
    title: 'Essential Pet Health Tips',
    category: 'Pet Health',
    description:
      'Learn about veterinary checkups, vaccinations and everyday pet health.',
    image:
      'https://images.pexels.com/photos/6234627/pexels-photo-6234627.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Veterinarian examining a dog during a health checkup',
    slug: 'pet-health'
  }
]

const categories = [
  'All',
  'Dogs',
  'Cats',
  'Pet Grooming',
  'Pet Care Tips',
  'Pet Health'
]

function Blog({ search, selectedCategory, setSelectedCategory }) {
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.category.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="blog-section" id="blog">
      <h2>Our Latest Articles</h2>

      <p>
        Explore helpful articles and learn how to care for your pets.
      </p>

      <div className="article-filters">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'All' ? 'All Articles' : category}
          </button>
        ))}
      </div>

      <div className="article-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Link
              to={`/article/${article.slug}`}
              className="article-card article-link"
              key={article.slug}
            >
              <img
                src={article.image}
                alt={article.alt}
                loading="lazy"
              />

              <p className="article-category">
                {article.category}
              </p>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <span className="read-more">
                Read More →
              </span>
            </Link>
          ))
        ) : (
          <p className="no-results">
            No articles found. Try another search.
          </p>
        )}
      </div>
    </section>
  )
}

export default Blog
