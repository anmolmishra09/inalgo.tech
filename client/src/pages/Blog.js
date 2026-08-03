import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [visible, setVisible] = useState(6);
  const [liked, setLiked] = useState({});

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2026',
      author: 'Inalgo Team',
      date: 'March 1, 2026',
      category: 'Technology',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development...',
      readTime: '5 min read',
      image: '💻'
    },
    {
      id: 2,
      title: 'Building Scalable SaaS Applications',
      author: 'Inalgo Team',
      date: 'February 28, 2026',
      category: 'Development',
      excerpt: 'Best practices for creating SaaS platforms that can grow with your business...',
      readTime: '8 min read',
      image: '☁️'
    },
    {
      id: 3,
      title: 'Mobile-First Design Strategies',
      author: 'Inalgo Team',
      date: 'February 25, 2026',
      category: 'Design',
      excerpt: 'Why mobile-first approach is essential for modern applications...',
      readTime: '6 min read',
      image: '📱'
    },
    {
      id: 4,
      title: 'AI and Machine Learning in Business',
      author: 'Inalgo Team',
      date: 'February 20, 2026',
      category: 'AI/ML',
      excerpt: 'How artificial intelligence is transforming business operations...',
      readTime: '10 min read',
      image: '🤖'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices',
      author: 'Inalgo Team',
      date: 'February 15, 2026',
      category: 'Security',
      excerpt: 'Essential security measures every business should implement...',
      readTime: '7 min read',
      image: '🔒'
    },
    {
      id: 6,
      title: 'Cloud Migration Guide',
      author: 'Inalgo Team',
      date: 'February 10, 2026',
      category: 'Cloud',
      excerpt: 'A comprehensive guide to migrating your infrastructure...',
      readTime: '12 min read',
      image: '🌐'
    }
  ];

  /* 🔍 FILTER LOGIC */
  const filteredPosts = blogPosts.filter(post =>
    (category === 'All' || post.category === category) &&
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  /* ❤️ LIKE FUNCTION */
  const toggleLike = (id) => {
    setLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  /* ⏳ READING PROGRESS BAR */
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = (scroll / height) * 100;
      const bar = document.querySelector('.reading-bar');
      if (bar) bar.style.width = progress + '%';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* 🧠 TAG LOGIC */
  const getTag = (category) => {
    if (category === "AI/ML") return "🔥 Trending";
    if (category === "Security") return "🔐 Important";
    return "✨ New";
  };

  return (
    <div className="blog-page">

      {/* ⏳ Progress Bar */}
      <div className="reading-bar"></div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Blog</h1>
          <p className="lead">Insights, tutorials, and industry trends</p>
        </div>
      </section>

      {/* ⭐ FEATURED BLOG */}
      <section className="featured-blog">
        <div className="container">
          <div className="featured-content">
            <h2>{blogPosts[0].title}</h2>
            <p>{blogPosts[0].excerpt}</p>
            <button className="btn-primary">Read Full Article</button>
          </div>
        </div>
      </section>

      {/* 🔍 FILTERS */}
      <div className="blog-controls container">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Technology</option>
          <option>Development</option>
          <option>Design</option>
          <option>AI/ML</option>
          <option>Security</option>
          <option>Cloud</option>
        </select>
      </div>

      {/* BLOG GRID */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">

            {filteredPosts.slice(0, visible).map(post => (
              <article key={post.id} className="blog-card">

                <div className="blog-icon">{post.image}</div>
                <span className="blog-category">{post.category}</span>
                <span className="blog-tag">{getTag(post.category)}</span>

                <h3>{post.title}</h3>

                <div className="blog-meta">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>

                <p className="excerpt">{post.excerpt}</p>

                <div className="blog-footer">
                  <span>{post.readTime}</span>

                  <div className="blog-actions">
                    <button onClick={() => toggleLike(post.id)}>
                      {liked[post.id] ? "❤️" : "🤍"}
                    </button>
                    <a href="ygd">Read More →</a>
                  </div>
                </div>

              </article>
            ))}

          </div>

          {/* LOAD MORE */}
          {visible < filteredPosts.length && (
            <div className="load-more">
              <button onClick={() => setVisible(prev => prev + 3)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 📩 NEWSLETTER */}
      <section className="newsletter">
        <div className="container">
          <h3>Stay Updated</h3>
          <p>Get the latest articles and insights directly in your inbox</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Blog;