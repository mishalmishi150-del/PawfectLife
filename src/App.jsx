
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import {
  HomePage,
  AboutPage,
  CategoriesPage,
  BlogPage,
  ContactPage,
  ArticlePage
} from './pages/Pages'

import {
  PrivacyPolicyPage,
  TermsPage
} from './pages/LegalPages'

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const slug = path.split('/').pop()

    const seoPages = {
      '/': {
        title: 'PawfectLife | Pet Care Tips, Guides & Advice',
        description: 'Discover helpful dog care, cat care, pet nutrition, grooming and animal health guides at PawfectLife.'
      },
      '/about': {
        title: 'About Us | PawfectLife',
        description: 'Learn about PawfectLife and our aim to help pet owners provide loving, responsible care for their animals.'
      },
      '/categories': {
        title: 'Pet Care Categories | PawfectLife',
        description: 'Explore dog, cat, grooming and general pet care categories with helpful guides for responsible pet owners.'
      },
      '/blog': {
        title: 'Pet Care Articles & Guides | PawfectLife',
        description: 'Read helpful articles about pet care, animal behavior, grooming, nutrition and everyday pet well-being.'
      },
      '/contact': {
        title: 'Contact Us | PawfectLife',
        description: 'Contact PawfectLife with your questions, suggestions or feedback about our pet care website.'
      },
      '/privacy-policy': {
        title: 'Privacy Policy | PawfectLife',
        description: 'Read the PawfectLife Privacy Policy to understand how visitor information is handled.'
      },
      '/terms': {
        title: 'Terms & Conditions | PawfectLife',
        description: 'Read the terms and conditions for using the PawfectLife pet care website.'
      }
    }

    const articleSEO = {
      'dog-care': [
        'Essential Dog Care Tips for Beginners | PawfectLife',
        'Learn about dog nutrition, daily exercise, grooming, training and preventive healthcare.'
      ],
      'cat-behavior': [
        'Understanding Your Cat’s Behavior | PawfectLife',
        'Understand cat body language, sounds, scratching, play and everyday behavior.'
      ],
      'pet-grooming': [
        'A Complete Guide to Pet Grooming | PawfectLife',
        'Explore safe pet brushing, bathing, nail care, ear hygiene and grooming routines.'
      ],
      'daily-pet-care': [
        'Daily Pet Care Tips | PawfectLife',
        'Discover everyday feeding, exercise, hygiene and care tips for healthier pets.'
      ],
      'pet-nutrition': [
        'Basic Pet Nutrition Guide | PawfectLife',
        'Learn about species-appropriate food, feeding portions, fresh water and pet nutrition.'
      ],
      'rabbit-care': [
        'Essential Rabbit Care Tips for Beginners | PawfectLife',
        'Learn about rabbit housing, hay-based nutrition, exercise, grooming and health care.'
      ],
      'pet-health': [
        'Pet Health Basics | PawfectLife',
        'Learn about veterinary checkups, vaccinations, dental hygiene, preventive care and everyday pet health.'
      ]
    }

    const page = seoPages[path]
    const article = path.startsWith('/article/') ? articleSEO[slug] : null

    const title = article ? article[0] : page?.title || 'PawfectLife | Pet Care Guides'
    const description = article ? article[1] : page?.description || 'Explore helpful pet care information at PawfectLife.'

    document.title = title

    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', description)

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', title)

    let ogDescription = document.querySelector('meta[property="og:description"]')
    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute('property', 'og:description')
      document.head.appendChild(ogDescription)
    }
    ogDescription.setAttribute('content', description)
  }, [location.pathname])

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                search={search}
                setSearch={setSearch}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />

          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/categories"
            element={
              <CategoriesPage
                setSelectedCategory={setSelectedCategory}
                setSearch={setSearch}
              />
            }
          />

          <Route
            path="/blog"
            element={
              <BlogPage
                search={search}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
