
import { useParams, Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Blog from '../components/Blog'
import About from '../components/About'
import Contact from '../components/Contact'

export function HomePage({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <>
      <Hero />

      <Categories
        setSelectedCategory={setSelectedCategory}
        setSearch={setSearch}
      />

      <Blog
        search={search}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Newsletter />
    </>
  )
}

export function AboutPage() {
  return <About />
}

export function CategoriesPage({ setSelectedCategory, setSearch }) {
  return (
    <Categories
      setSelectedCategory={setSelectedCategory}
      setSearch={setSearch}
    />
  )
}

export function BlogPage({
  search,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <Blog
      search={search}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  )
}

export function ContactPage() {
  return <Contact />
}

const articles = {
  'dog-care': {
    title: 'Essential Dog Care Tips for Beginners',
    category: 'Dogs',
    date: 'November 10, 2026',
    intro: 'Welcoming a dog into your family is the beginning of a wonderful companionship. However, responsible dog ownership involves much more than providing food and shelter. Dogs rely on their owners for proper nutrition, regular exercise, grooming, training and preventive healthcare. Understanding these essential responsibilities will help you create a safe, healthy and loving environment where your dog can thrive.',
    sections: [
      {
        heading: '1. Provide Complete and Balanced Nutrition',
        paragraphs: [
          'Good nutrition is one of the foundations of a healthy life. Choose a complete and balanced dog food that is appropriate for your pet’s age, size, activity level and individual health requirements. Puppies, adult dogs and senior dogs have different nutritional needs, so selecting the right food is important at every stage of life.',
          'Always provide access to clean, fresh drinking water. Follow suitable feeding portions rather than overfeeding, and keep food bowls clean. If you plan to change your dog’s diet, introduce the new food gradually and consult a veterinarian for advice about your dog’s nutritional requirements.'
        ]
      },
      {
        heading: '2. Make Exercise Part of the Daily Routine',
        paragraphs: [
          'Regular physical activity supports a dog’s fitness, mobility and emotional well-being. Daily walks, supervised outdoor activities and interactive games provide opportunities for movement and exploration. Exercise also offers mental stimulation and helps prevent boredom-related behaviors.',
          'Every dog has different activity requirements. Breed, age, size and health all influence how much exercise is appropriate. Avoid excessive activity in extreme temperatures, provide regular water breaks and allow your dog enough time to rest.'
        ]
      },
      {
        heading: '3. Maintain Proper Grooming and Hygiene',
        paragraphs: [
          'A consistent grooming routine helps keep your dog comfortable and allows you to notice changes in its coat or skin. Brushing removes loose hair, helps manage tangles and distributes natural oils. The appropriate brush and brushing frequency depend on your dog’s coat type.',
          'Regularly check your dog’s ears, paws, nails, teeth and skin. Use products specifically designed for dogs, and never force a grooming procedure if your pet becomes distressed. A professional groomer or veterinarian can help with difficult grooming needs.'
        ]
      },
      {
        heading: '4. Build Good Habits Through Positive Training',
        paragraphs: [
          'Training helps dogs understand everyday expectations and strengthens the relationship between pets and their owners. Start with simple commands such as sit, stay and come. Keep training sessions short, consistent and enjoyable, rewarding desirable behavior with praise, play or appropriate treats.',
          'Early socialization can help dogs become more comfortable with different environments, people and experiences. Introduce new situations gradually and respect your dog’s comfort level. Patience and positive reinforcement are more effective than harsh punishment.'
        ]
      },
      {
        heading: '5. Prioritize Veterinary Care and Safety',
        paragraphs: [
          'Preventive healthcare plays an important role in maintaining your dog’s long-term well-being. Schedule regular veterinary examinations and discuss vaccinations, parasite prevention, dental care and weight management. Keep track of appointments and follow professional recommendations.',
          'Create a safe living environment by securing household chemicals, medicines, electrical wires and potentially dangerous foods. Provide a comfortable resting area and supervise outdoor activities. Any unusual changes in appetite, energy, movement or behavior should be discussed with a veterinarian.'
        ]
      }
    ],
    conclusion: 'Caring for a dog is a lifelong commitment built on consistency, patience and understanding. By providing balanced nutrition, regular exercise, proper grooming, positive training and preventive healthcare, you can support your dog’s physical and emotional well-being. Most importantly, take time to understand your dog’s individual needs and make responsible care part of everyday life.'
  },

  'cat-behavior': {
    title: 'Understanding Your Cat’s Behavior',
    category: 'Cats',
    date: 'November 10, 2026',
    intro: 'Cats are fascinating companions with their own personalities, habits and ways of communicating. Although they cannot express themselves through words, their body language, vocal sounds and everyday actions reveal valuable information about their comfort and emotions. Learning to recognise these signals can help you understand your cat more effectively, build trust and create a peaceful home environment.',
    sections: [
      {
        heading: '1. Learn to Read Your Cat’s Body Language',
        paragraphs: [
          'A cat’s ears, eyes, tail and posture can communicate a great deal. A relaxed cat may have soft eyes, naturally positioned ears and a comfortable body posture. Slow blinking can also occur during calm interactions. In contrast, flattened ears, a tucked tail, crouching or repeated hissing may indicate fear, stress or discomfort.',
          'Always consider the overall situation rather than interpreting one movement in isolation. Give your cat enough space to move away when it wants to. Respecting these signals helps prevent stressful interactions and encourages a stronger relationship.'
        ]
      },
      {
        heading: '2. Understand Common Cat Sounds',
        paragraphs: [
          'Cats use vocal communication for different purposes. Meowing may be a way to request attention, food or access to a particular space. Purring is often associated with comfort, although cats may also purr when they are anxious or unwell. Hissing and growling generally communicate that a cat feels threatened or wants distance.',
          'Notice when your cat makes particular sounds and what happens around it. Understanding these patterns can help you respond appropriately. If your cat suddenly becomes unusually vocal or its sounds change alongside other unusual symptoms, consult a veterinarian.'
        ]
      },
      {
        heading: '3. Understand Why Cats Scratch',
        paragraphs: [
          'Scratching is a natural and necessary behavior for cats. It helps them maintain their claws, stretch their muscles and leave scent marks in their environment. Scratching furniture does not necessarily mean a cat is being disobedient; it may simply lack a suitable alternative.',
          'Provide stable scratching posts or boards in areas your cat frequently visits. Some cats prefer vertical surfaces, while others enjoy horizontal scratching pads. Encourage appropriate scratching with positive reinforcement and avoid punishment.'
        ]
      },
      {
        heading: '4. Encourage Play and Mental Stimulation',
        paragraphs: [
          'Play is an essential part of a cat’s daily routine. Interactive toys allow cats to practise natural hunting movements such as stalking, chasing and pouncing. Regular play sessions provide physical activity, reduce boredom and give indoor cats opportunities to express natural behaviors.',
          'Create an interesting environment with safe toys, comfortable hiding places and suitable climbing areas. Rotate toys occasionally to maintain interest. Always supervise toys containing strings, small pieces or other parts that could be swallowed.'
        ]
      },
      {
        heading: '5. Respect Litter Box Habits and Personal Space',
        paragraphs: [
          'A clean and accessible litter box contributes to a cat’s comfort. Place it in a quiet location where your cat can reach it easily, and remove waste regularly. Cats may avoid litter boxes that are dirty, difficult to access or positioned in stressful surroundings.',
          'Every cat has its own preferences for handling and interaction. Some enjoy being picked up, while others prefer sitting nearby without physical contact. Respect these individual boundaries. A sudden change in litter box habits should be discussed with a veterinarian because medical conditions can sometimes affect toileting behavior.'
        ]
      }
    ],
    conclusion: 'Understanding your cat is an ongoing process that requires observation, patience and respect. By recognising body language, responding appropriately to vocal communication, providing opportunities for play and maintaining a comfortable environment, you can help your cat feel secure and confident. A little attention to everyday behavior can make a meaningful difference in your relationship with your feline companion.'
  },

  'pet-grooming': {
    title: 'A Complete Guide to Pet Grooming',
    category: 'Pet Grooming',
    date: 'November 10, 2026',
    intro: 'Pet grooming is an important part of maintaining cleanliness, comfort and general well-being. A suitable grooming routine helps manage loose hair, maintain coat condition and identify possible skin, nail or ear concerns before they become more serious. Since grooming requirements vary between animals and coat types, understanding the right techniques and using appropriate products is essential for responsible pet care.',
    sections: [
      {
        heading: '1. Keep the Coat Healthy with Regular Brushing',
        paragraphs: [
          'Regular brushing helps remove loose hair, reduce tangles and keep the coat looking well maintained. It also gives owners an opportunity to check for unusual skin changes, parasites or irritated areas. The type of brush and frequency of brushing should be selected according to the animal’s coat.',
          'Use gentle strokes and avoid pulling at knots, as this can cause discomfort. Introduce grooming tools gradually, especially if your pet is unfamiliar with them. Severe mats or difficult coat conditions should be handled by a professional groomer.'
        ]
      },
      {
        heading: '2. Bathe Your Pet Safely',
        paragraphs: [
          'Bathing can help remove dirt and unpleasant odors, but not every animal requires frequent baths. The appropriate bathing schedule depends on species, coat condition, lifestyle and individual needs. Always select a shampoo formulated specifically for your pet rather than using ordinary human products.',
          'Use comfortably warm water and keep shampoo away from the eyes and inside of the ears. Rinse the coat thoroughly to prevent product residue from irritating the skin. Dry your pet carefully and make the bathing experience as calm as possible.'
        ]
      },
      {
        heading: '3. Pay Attention to Nail and Paw Care',
        paragraphs: [
          'Nail maintenance is an often-overlooked part of grooming. Overgrown nails may cause discomfort and can interfere with normal movement. Check your pet’s nails regularly and use suitable nail clippers designed for the animal.',
          'Trimming nails requires care because cutting too close to the sensitive area can cause pain or bleeding. If you are uncertain about the correct technique, ask a veterinarian or experienced groomer to demonstrate it. Inspect paws for cuts, swelling, trapped debris or irritation.'
        ]
      },
      {
        heading: '4. Maintain Ear and Dental Hygiene',
        paragraphs: [
          'Healthy ears should be checked regularly for unusual odor, redness, discharge or repeated scratching. Clean only the areas and in the manner recommended for your pet. Never insert cotton buds or other objects deep into the ear canal, as this can cause injury.',
          'Dental hygiene is equally important. Use pet-safe toothbrushes and dental products suitable for the species. Regularly observe your pet’s mouth for unpleasant breath, swollen gums or difficulty eating. Seek veterinary advice if you notice any concerning changes.'
        ]
      },
      {
        heading: '5. Make Grooming a Calm and Positive Experience',
        paragraphs: [
          'Some pets enjoy grooming, while others may feel nervous about unfamiliar tools or handling. Introduce brushes, clippers and bathing routines slowly. Allow your pet to become comfortable with each step, keep sessions manageable and reward calm behavior with praise or suitable treats.',
          'Never force a grooming procedure when an animal is frightened or in pain. Certain coat types, skin conditions and grooming tasks require professional assistance. A veterinarian should assess persistent itching, unusual skin changes or painful areas.'
        ]
      }
    ],
    conclusion: 'A well-planned grooming routine supports your pet’s comfort and makes it easier to notice changes that may require attention. Regular brushing, safe bathing, nail maintenance, ear checks and dental hygiene all contribute to responsible care. Choose appropriate products, handle your pet gently and seek professional help whenever necessary.'
  },

  'daily-pet-care': {
    title: 'Daily Pet Care Tips for Healthy and Happy Animals',
    category: 'Pet Care Tips',
    date: 'November 10, 2026',
    intro: 'A happy and healthy pet depends on consistent care, a safe environment and meaningful attention. Daily routines may seem simple, but they play an important role in supporting an animal’s physical health and emotional well-being. From suitable meals and fresh water to exercise and hygiene, small responsible actions can make everyday life more comfortable for your companion.',
    sections: [
      {
        heading: '1. Establish a Consistent Feeding Routine',
        paragraphs: [
          'A suitable feeding routine helps ensure that your pet receives the nutrition it needs. Choose food specifically formulated for its species and life stage. Age, size, activity level and health can all influence dietary requirements, so feeding portions should be appropriate for the individual animal.',
          'Keep feeding areas clean and provide fresh drinking water throughout the day. Avoid offering unfamiliar human foods without checking whether they are safe for your pet. If you have concerns about diet or weight, seek advice from a veterinarian.'
        ]
      },
      {
        heading: '2. Maintain a Clean and Comfortable Environment',
        paragraphs: [
          'A hygienic living space is essential for your pet’s comfort. Clean food and water bowls regularly, wash bedding when needed and remove waste promptly. Litter trays, cages and other animal living areas should be maintained according to the specific needs of the species.',
          'Provide a suitable resting area where your pet can relax without disturbance. Remove damaged toys, sharp objects and potentially harmful household materials. A clean, secure environment reduces unnecessary risks and supports everyday well-being.'
        ]
      },
      {
        heading: '3. Provide Physical Activity and Enrichment',
        paragraphs: [
          'Physical activity helps animals maintain mobility and a healthy body condition. Dogs may benefit from walks and supervised games, while cats often enjoy interactive toys and climbing opportunities. Other pets also need activities suited to their natural behaviors and abilities.',
          'Mental stimulation is just as valuable as physical exercise. Introduce suitable toys, simple enrichment activities and opportunities to explore safely. Adjust activity according to your pet’s age, health and energy level.'
        ]
      },
      {
        heading: '4. Observe Your Pet’s Health Every Day',
        paragraphs: [
          'Regular observation helps owners become familiar with their pet’s normal habits. Pay attention to appetite, water intake, energy, movement, breathing, coat condition and toileting patterns. Recognising changes early can help you seek appropriate care sooner.',
          'Do not ignore sudden changes in behavior or signs of discomfort. If your pet appears unwell, stops eating, experiences unusual difficulty moving or shows other concerning symptoms, contact a veterinarian rather than attempting to diagnose the problem yourself.'
        ]
      },
      {
        heading: '5. Build a Strong Bond Through Positive Interaction',
        paragraphs: [
          'Daily interaction helps strengthen trust between pets and their owners. Spend time playing, providing gentle attention or simply allowing your pet to enjoy your company. Different animals have different preferences, so learn which interactions make your companion feel safe and comfortable.',
          'Use calm handling and reward desirable behavior. Avoid forcing contact or disturbing an animal when it is resting. A predictable routine and respectful interaction can help create a secure and positive home environment.'
        ]
      }
    ],
    conclusion: 'Excellent pet care is not defined by one big action but by many thoughtful habits repeated every day. Suitable nutrition, a clean living space, appropriate exercise, regular health observation and positive interaction all contribute to a better quality of life. By understanding your pet’s individual needs, you can provide care that supports a healthier and happier companion.'
  },

  'pet-nutrition': {
    title: 'Understanding Basic Pet Nutrition: A Guide for Responsible Owners',
    category: 'Pet Care Tips',
    date: 'November 10, 2026',
    intro: 'Nutrition is one of the most important factors influencing an animal’s growth, energy and long-term health. However, choosing the right food can be confusing when there are so many products and feeding recommendations available. Understanding basic nutritional principles helps pet owners make informed decisions and provide meals that are appropriate for their companion’s species, age and individual requirements.',
    sections: [
      {
        heading: '1. Choose Food Designed for Your Pet’s Species',
        paragraphs: [
          'Different animals have different nutritional requirements. A diet suitable for a dog may not meet the needs of a cat, rabbit or bird. Always choose food specifically formulated for your pet’s species and check that it provides appropriate nutrition.',
          'Read product labels carefully and look for clear feeding guidance. Avoid selecting food based only on packaging or advertising. If your pet has allergies, a medical condition or special dietary requirements, consult a veterinarian before making changes.'
        ]
      },
      {
        heading: '2. Understand the Importance of Life Stages',
        paragraphs: [
          'Nutritional requirements can change throughout an animal’s life. Growing puppies and kittens may need different nutrient levels from healthy adult animals. Senior pets may also benefit from dietary adjustments depending on their health, body condition and activity level.',
          'Choose food appropriate for your pet’s current life stage and review its condition regularly. Your veterinarian can help assess whether the existing diet is suitable or whether a change may be necessary.'
        ]
      },
      {
        heading: '3. Manage Portions and Treats Responsibly',
        paragraphs: [
          'Providing the correct amount of food is just as important as choosing the right product. Overfeeding can contribute to unhealthy weight gain, while insufficient feeding may prevent an animal from receiving the nutrients it needs. Follow feeding guidance and adjust portions with professional advice.',
          'Treats can be useful for training and positive interaction, but they should not replace balanced meals. Select treats appropriate for your pet’s species and keep them moderate. Regularly monitor body condition to help maintain a healthy weight.'
        ]
      },
      {
        heading: '4. Never Underestimate the Importance of Fresh Water',
        paragraphs: [
          'Clean drinking water is essential for normal body functions. Make fresh water available throughout the day and wash bowls regularly to maintain hygiene. Place water in an accessible location where your pet can drink comfortably.',
          'Observe your pet’s normal drinking habits. A sudden increase or decrease in water consumption may indicate a health concern and should be discussed with a veterinarian, particularly if other unusual symptoms are present.'
        ]
      },
      {
        heading: '5. Avoid Unsafe Foods and Unnecessary Diet Changes',
        paragraphs: [
          'Some foods commonly consumed by humans can be harmful to animals. Never assume that an ingredient is safe simply because it is suitable for people. Check reliable veterinary guidance before offering unfamiliar foods, and keep potentially dangerous ingredients away from pets.',
          'Changing diets too quickly may cause digestive discomfort in some animals. When a dietary change is needed, ask your veterinarian how to introduce the new food appropriately. Monitor your pet for changes in appetite, digestion and general condition.'
        ]
      }
    ],
    conclusion: 'Responsible nutrition begins with understanding that every animal has individual dietary needs. Selecting species-appropriate food, considering life stages, managing portions and providing fresh water are essential parts of a healthy feeding routine. When making important dietary decisions, professional veterinary guidance can help ensure that your pet receives appropriate and balanced nutrition.'
  },

  'pet-health': {
    title: 'Pet Health Basics: A Guide to Keeping Your Pet Healthy',
    category: 'Pet Health',
    date: 'November 11, 2026',
    intro: 'A healthy pet needs more than food, water and shelter. Regular health checks, preventive care, good hygiene and attention to everyday behavior all contribute to a better quality of life. Understanding basic pet health responsibilities helps owners recognise potential concerns and make informed decisions about their companions.',
    sections: [
      {
        heading: '1. Schedule Regular Veterinary Checkups',
        paragraphs: [
          'Routine veterinary examinations help monitor your pet’s general condition and identify possible health concerns. Your veterinarian can check weight, teeth, ears, eyes, skin and other important aspects of health.',
          'The recommended frequency of visits depends on your pet’s species, age and individual needs. Keep a record of appointments and discuss any changes in your pet’s behavior or condition.'
        ]
      },
      {
        heading: '2. Keep Vaccinations and Parasite Prevention Up to Date',
        paragraphs: [
          'Vaccinations help protect pets against certain infectious diseases. The appropriate vaccination schedule varies according to species, age, lifestyle and local health risks.',
          'Fleas, ticks and internal parasites can also affect animal health. Ask your veterinarian which preventive treatments are suitable for your pet, and follow the recommended schedule.'
        ]
      },
      {
        heading: '3. Maintain Dental and Everyday Hygiene',
        paragraphs: [
          'Dental care is an important part of overall pet health. Use toothbrushes and dental products designed specifically for your pet’s species. Regularly observe the mouth for unpleasant breath, swollen gums or difficulty eating.',
          'Keep bedding, food bowls and living areas clean. Check your pet’s coat, paws, ears and skin regularly, and seek professional advice if you notice irritation, unusual discharge or persistent discomfort.'
        ]
      },
      {
        heading: '4. Monitor Changes in Behavior and Physical Condition',
        paragraphs: [
          'Owners often notice the first signs of a problem through changes in everyday habits. Pay attention to appetite, drinking, energy, movement, breathing, sleep and toileting patterns.',
          'Sudden or unusual changes should not be ignored. Difficulty breathing, collapse, serious injury or suspected poisoning require urgent veterinary attention. Do not attempt to diagnose or treat serious conditions yourself.'
        ]
      },
      {
        heading: '5. Support a Healthy Lifestyle',
        paragraphs: [
          'A suitable diet, fresh drinking water, appropriate exercise and enough rest help support your pet’s well-being. Choose food designed for the animal’s species and life stage, and avoid overfeeding.',
          'Provide safe opportunities for physical activity and mental stimulation. Adjust exercise and daily routines according to your pet’s age, abilities and health needs. Your veterinarian can guide you on maintaining a suitable weight and lifestyle.'
        ]
      }
    ],
    conclusion: 'Good pet health care is built on regular veterinary visits, preventive treatments, proper hygiene and careful observation. Every animal has individual needs, so responsible owners should work with a qualified veterinarian to make suitable health decisions. Consistent attention and early professional advice can help pets enjoy healthier, more comfortable lives.'
  },

  'rabbit-care': {
    title: 'Essential Rabbit Care Tips for Beginners',
    category: 'Pet Care Tips',
    date: 'November 11, 2026',
    intro: 'Rabbits are gentle and intelligent animals that need thoughtful daily care. Providing a suitable living space, a balanced diet, regular activity and gentle handling helps support their health and comfort. Understanding their natural needs is an important part of becoming a responsible rabbit owner.',
    sections: [
      {
        heading: '1. Provide a Safe and Comfortable Living Space',
        paragraphs: [
          'Rabbits need a clean, spacious and secure environment where they can move freely, stretch and rest comfortably. Their living area should have good ventilation, suitable flooring and a quiet resting place.',
          'Protect your rabbit from extreme temperatures, electrical wires, toxic plants and other household hazards. Give it a safe area for supervised exercise every day.'
        ]
      },
      {
        heading: '2. Choose the Right Diet',
        paragraphs: [
          'A rabbit’s diet should be based mainly on good-quality grass hay, with fresh water always available. Suitable leafy greens and an appropriate quantity of rabbit pellets can also form part of a balanced feeding routine.',
          'Introduce new foods gradually and avoid sugary treats or foods that are unsuitable for rabbits. Ask a veterinarian familiar with rabbits for advice about your pet’s individual dietary needs.'
        ]
      },
      {
        heading: '3. Encourage Daily Exercise and Enrichment',
        paragraphs: [
          'Rabbits need opportunities to move, explore and express natural behaviors. Provide a safe exercise area, tunnels, hiding places and rabbit-safe toys to encourage activity and prevent boredom.',
          'Allow your rabbit to explore at its own pace. Supervise playtime and remove objects that could be chewed or swallowed and cause harm.'
        ]
      },
      {
        heading: '4. Maintain Grooming and Hygiene',
        paragraphs: [
          'Regularly check your rabbit’s coat, nails, ears and paws. Gentle brushing helps remove loose fur, especially during shedding periods. Grooming needs depend on coat length and individual requirements.',
          'Keep the living area clean and provide a suitable litter area. If you notice unusual hair loss, skin irritation, dirty ears or overgrown nails, seek advice from a rabbit-experienced veterinarian.'
        ]
      },
      {
        heading: '5. Handle Your Rabbit Gently and Monitor Its Health',
        paragraphs: [
          'Rabbits are delicate animals and need careful handling. Support the chest and hindquarters whenever lifting is necessary, and never pick a rabbit up by its ears. Many rabbits feel more comfortable interacting with people at ground level.',
          'Pay attention to appetite, droppings, movement and behavior. A rabbit that stops eating or producing droppings needs urgent veterinary attention. Arrange regular health checks with a veterinarian experienced in rabbit care.'
        ]
      }
    ],
    conclusion: 'Responsible rabbit care means providing a safe home, suitable nutrition, daily exercise, gentle handling and regular health monitoring. Learn your rabbit’s individual habits and seek professional veterinary advice whenever you notice a change in its health or behavior.'
  }
}

// Related articles for internal linking and SEO
const relatedArticles = {
  'dog-care': ['pet-health', 'pet-grooming', 'pet-nutrition'],
  'cat-behavior': ['pet-health', 'pet-grooming', 'pet-nutrition'],
  'pet-grooming': ['dog-care', 'cat-behavior', 'pet-health'],
  'daily-pet-care': ['dog-care', 'pet-nutrition', 'pet-health'],
  'pet-nutrition': ['pet-health', 'dog-care', 'rabbit-care'],
  'pet-health': ['dog-care', 'pet-nutrition', 'pet-grooming'],
  'rabbit-care': ['pet-nutrition', 'pet-health', 'pet-grooming']
}

export function ArticlePage() {
  const { slug } = useParams()
  const article = articles[slug]

  const articleImages = {
    'dog-care': {
      src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000&q=75&auto=format&fit=crop&crop=faces',
      alt: 'Golden retriever dog',
      position: 'center 25%'
    },
    'cat-behavior': {
      src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1000&q=75&auto=format&fit=crop&crop=faces',
      alt: 'Beautiful cat looking at the camera'
    },
    'pet-grooming': {
      src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000&q=75&auto=format&fit=crop',
      alt: 'Pet grooming'
    },
    'daily-pet-care': {
      src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000&q=75&auto=format&fit=crop',
      alt: 'Dogs enjoying time together'
    },
    'pet-nutrition': {
      src: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=1000&q=75&auto=format&fit=crop',
      alt: 'Pet food and feeding bowl'
    },
    'pet-health': {
      src: 'https://images.pexels.com/photos/6234627/pexels-photo-6234627.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Veterinarian examining a dog during a health checkup'
    },
    'rabbit-care': {
      src: 'https://images.unsplash.com/photo-1707389572540-3f6c5a7fde43?auto=format&fit=crop&w=1200&q=85',
      alt: 'Brown rabbit',
      position: 'center 30%'
    }
  }

  if (!article) {
    return (
      <section className="article-not-found">
        <h1>Article Not Found</h1>
        <p>This article could not be found.</p>

        <Link to="/blog" className="article-back-button">
          ← Back to Blog
        </Link>
      </section>
    )
  }

  const image = articleImages[slug]

  return (
    <div className="article-page">
      <div className="article-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/blog">Blog</Link>
        <span>/</span>
        <span>{article.category}</span>
      </div>

      <article className="article-detail">
        <header className="article-header">
          <span className="article-category-label">
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <p className="article-meta">
            Published by PawfectLife
            <span>•</span>
            {article.date}
          </p>
        </header>

        <figure className="article-featured-image">
          <img
            src={image.src}
            alt={image.alt}
            style={{ objectPosition: image.position || 'center' }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </figure>

        <div className="article-content">
          <p className="article-intro">{article.intro}</p>

          {article.sections.map((section) => (
            <section className="article-section" key={section.heading}>
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="article-conclusion">
            <h2>Final Thoughts</h2>
            <p>{article.conclusion}</p>
          </section>

          {/* Related Articles */}
          <section className="article-section">
            <h2>Related Articles</h2>

            {relatedArticles[slug]?.map((relatedSlug) => (
              <p key={relatedSlug}>
                <Link to={`/article/${relatedSlug}`}>
                  {articles[relatedSlug].title} →
                </Link>
              </p>
            ))}
          </section>
        </div>

        <div className="article-footer">
          <Link to="/blog" className="article-back-button">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  )
}
