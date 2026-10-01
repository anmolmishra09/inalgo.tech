import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Blog.css";
// SEO Component
import SEO from "../components/SEO";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-development-2026",
    title: "The Future of Web Development in 2026",
    author: "Inalgo Team",
    date: "March 1, 2026",
    category: "Technology",
    readTime: "5 min read",
    image: "💻",
    tag: "Trending",
    excerpt:
      "Explore the technologies, architectures, and development practices shaping the next generation of digital products.",
    tags: ["Web Development", "Technology", "Frontend"],
    content: [
      {
        heading: "Web development is becoming more intelligent",
        text:
          "Modern web applications are moving beyond static interfaces. AI-assisted development, intelligent search, real-time experiences, and increasingly automated workflows are becoming important parts of production applications."
      },
      {
        heading: "Performance remains a priority",
        text:
          "Users expect applications to load quickly and respond immediately. Modern teams are therefore focusing on optimized assets, efficient rendering, caching, edge delivery, and smaller client-side bundles."
      },
      {
        heading: "The developer experience is evolving",
        text:
          "AI coding assistants and automated testing tools are helping developers spend less time on repetitive implementation work and more time on architecture, product decisions, and quality."
      }
    ]
  },
  {
    id: 2,
    slug: "building-scalable-saas-applications",
    title: "Building Scalable SaaS Applications",
    author: "Inalgo Engineering",
    date: "February 28, 2026",
    category: "Development",
    readTime: "8 min read",
    image: "☁️",
    tag: "Guide",
    excerpt:
      "A practical overview of architecture, databases, APIs, caching, observability, and deployment strategies for scalable SaaS products.",
    tags: ["SaaS", "Architecture", "Backend"],
    content: [
      {
        heading: "Start with a clear architecture",
        text:
          "A scalable SaaS platform should separate business logic, data access, authentication, background jobs, and external integrations. Clear boundaries make the system easier to test and evolve."
      },
      {
        heading: "Design the database carefully",
        text:
          "Database structure becomes increasingly important as customers and transactions grow. Indexing, query optimization, connection pooling, and sensible data modeling should be considered early."
      },
      {
        heading: "Build for observability",
        text:
          "Logs, metrics, traces, error tracking, and health checks provide the visibility required to identify production problems before they become large customer-facing incidents."
      }
    ]
  },
  {
    id: 3,
    slug: "mobile-first-design-strategies",
    title: "Mobile-First Design Strategies",
    author: "Inalgo Design Team",
    date: "February 25, 2026",
    category: "Design",
    readTime: "6 min read",
    image: "📱",
    tag: "Design",
    excerpt:
      "Learn how a mobile-first design process can create cleaner, faster, and more accessible digital experiences.",
    tags: ["UI/UX", "Mobile", "Design"],
    content: [
      {
        heading: "Design for the smallest screen first",
        text:
          "Starting with smaller screens forces teams to prioritize the most important content and interactions before progressively expanding the experience for larger devices."
      },
      {
        heading: "Make interactions obvious",
        text:
          "Buttons, navigation, forms, and interactive controls should have clear visual hierarchy and sufficient touch targets. Consistency is especially important on mobile interfaces."
      },
      {
        heading: "Responsive design is more than screen size",
        text:
          "A responsive product should adapt its layout, typography, navigation, content density, and interaction patterns according to the available space."
      }
    ]
  },
  {
    id: 4,
    slug: "ai-machine-learning-business",
    title: "AI and Machine Learning in Business",
    author: "Inalgo AI Team",
    date: "February 20, 2026",
    category: "AI/ML",
    readTime: "10 min read",
    image: "🤖",
    tag: "Trending",
    excerpt:
      "Discover how organizations are using AI and machine learning to automate workflows, analyze data, and improve customer experiences.",
    tags: ["Artificial Intelligence", "Machine Learning", "Business"],
    content: [
      {
        heading: "AI is moving into everyday workflows",
        text:
          "Businesses are increasingly integrating AI into customer support, document processing, analytics, content operations, search, and internal knowledge systems."
      },
      {
        heading: "Data quality matters",
        text:
          "Successful AI systems depend on reliable data. Organizations should establish clear data pipelines, validation processes, governance, and monitoring before scaling machine learning applications."
      },
      {
        heading: "Human oversight remains important",
        text:
          "AI systems should be designed with appropriate review mechanisms, evaluation processes, and clear boundaries for decisions that require human judgment."
      }
    ]
  },
  {
    id: 5,
    slug: "cybersecurity-best-practices",
    title: "Cybersecurity Best Practices Every Business Should Know",
    author: "Inalgo Security Team",
    date: "February 15, 2026",
    category: "Security",
    readTime: "7 min read",
    image: "🔒",
    tag: "Important",
    excerpt:
      "Essential security principles covering authentication, access control, application security, monitoring, and incident readiness.",
    tags: ["Cybersecurity", "Security", "Enterprise"],
    content: [
      {
        heading: "Use strong identity controls",
        text:
          "Multi-factor authentication, strong password policies, session management, and role-based access control can reduce unnecessary exposure."
      },
      {
        heading: "Protect application boundaries",
        text:
          "Applications should validate input, protect secrets, apply appropriate authorization checks, and keep dependencies updated."
      },
      {
        heading: "Prepare for incidents",
        text:
          "Security is not only about prevention. Organizations should also maintain monitoring, backups, incident procedures, and recovery plans."
      }
    ]
  },
  {
    id: 6,
    slug: "cloud-migration-guide",
    title: "A Practical Cloud Migration Guide",
    author: "Inalgo Cloud Team",
    date: "February 10, 2026",
    category: "Cloud",
    readTime: "12 min read",
    image: "🌐",
    tag: "Guide",
    excerpt:
      "Understand the major stages involved in planning, migrating, securing, and optimizing cloud infrastructure.",
    tags: ["Cloud", "DevOps", "Infrastructure"],
    content: [
      {
        heading: "Start with an infrastructure assessment",
        text:
          "Before migration, document applications, dependencies, databases, network requirements, security controls, and operational processes."
      },
      {
        heading: "Choose the right migration strategy",
        text:
          "Different workloads may require different approaches, including rehosting, replatforming, refactoring, or replacing existing systems."
      },
      {
        heading: "Optimize after migration",
        text:
          "Moving workloads to the cloud is only the beginning. Teams should continuously review performance, reliability, security, and infrastructure costs."
      }
    ]
  },
  {
    id: 7,
    slug: "generative-ai-enterprise-applications",
    title: "Generative AI for Enterprise Applications",
    author: "Inalgo AI Lab",
    date: "February 5, 2026",
    category: "AI/ML",
    readTime: "9 min read",
    image: "🧠",
    tag: "AI",
    excerpt:
      "How enterprise teams can combine language models, retrieval systems, structured data, and business workflows.",
    tags: ["GenAI", "LLM", "RAG"],
    content: [
      {
        heading: "From chatbots to business systems",
        text:
          "Generative AI becomes more useful when connected to enterprise knowledge, tools, workflows, and structured business data rather than operating as an isolated chat interface."
      },
      {
        heading: "Retrieval improves context",
        text:
          "Retrieval-augmented generation can provide models with relevant organizational information while reducing dependence on information contained solely within model parameters."
      },
      {
        heading: "Evaluation should be continuous",
        text:
          "Teams should evaluate accuracy, relevance, latency, safety, and user satisfaction throughout the lifecycle of an AI application."
      }
    ]
  },
  {
    id: 8,
    slug: "modern-react-architecture",
    title: "Modern React Architecture: From Components to Systems",
    author: "Inalgo Frontend Team",
    date: "January 30, 2026",
    category: "Development",
    readTime: "8 min read",
    image: "⚛️",
    tag: "Engineering",
    excerpt:
      "A look at component architecture, state management, performance, reusable systems, and maintainable React applications.",
    tags: ["React", "Frontend", "JavaScript"],
    content: [
      {
        heading: "Components should have clear responsibilities",
        text:
          "Well-designed components are easier to test, reuse, and maintain. Keeping presentation, state, and business logic appropriately separated improves long-term maintainability."
      },
      {
        heading: "Avoid unnecessary complexity",
        text:
          "Not every application needs a large state-management system. Teams should choose the simplest architecture that satisfies current requirements while leaving room for growth."
      },
      {
        heading: "Build reusable design systems",
        text:
          "Shared buttons, forms, cards, navigation elements, spacing rules, and typography can create consistency across large applications."
      }
    ]
  },
  {
    id: 9,
    slug: "designing-high-converting-digital-products",
    title: "Designing High-Converting Digital Products",
    author: "Inalgo Product Team",
    date: "January 25, 2026",
    category: "Design",
    readTime: "6 min read",
    image: "🎨",
    tag: "Product",
    excerpt:
      "Explore practical principles for creating digital interfaces that communicate value clearly and reduce user friction.",
    tags: ["Product Design", "UX", "Conversion"],
    content: [
      {
        heading: "Clarity comes first",
        text:
          "Users should quickly understand what a product does, who it is for, and what action they can take next."
      },
      {
        heading: "Reduce unnecessary friction",
        text:
          "Simplifying forms, navigation, onboarding, and checkout experiences can make products easier to understand and use."
      },
      {
        heading: "Use visual hierarchy intentionally",
        text:
          "Typography, spacing, contrast, grouping, and positioning help guide attention through an interface."
      }
    ]
  },
  {
    id: 10,
    slug: "data-driven-business-decisions",
    title: "Using Data to Make Better Business Decisions",
    author: "Inalgo Analytics Team",
    date: "January 20, 2026",
    category: "Technology",
    readTime: "7 min read",
    image: "📊",
    tag: "Analytics",
    excerpt:
      "A practical introduction to metrics, dashboards, experimentation, and analytical thinking for modern organizations.",
    tags: ["Analytics", "Data", "Business Intelligence"],
    content: [
      {
        heading: "Define the question first",
        text:
          "Good analytics begins with a clear business question. Teams should understand what decision the analysis is expected to support before collecting or transforming data."
      },
      {
        heading: "Choose meaningful metrics",
        text:
          "Metrics should connect directly to business outcomes. Vanity metrics can create activity without providing enough information for meaningful decisions."
      },
      {
        heading: "Turn analysis into action",
        text:
          "The purpose of analytics is not simply to produce dashboards. Insights should lead to experiments, operational changes, product improvements, or further investigation."
      }
    ]
  },
  {
    id: 11,
    slug: "building-real-time-applications",
    title: "Building Real-Time Applications",
    author: "Inalgo Engineering",
    date: "January 15, 2026",
    category: "Development",
    readTime: "9 min read",
    image: "⚡",
    tag: "Engineering",
    excerpt:
      "Understand WebSockets, event-driven architecture, caching, messaging, and monitoring for real-time applications.",
    tags: ["Real-Time", "WebSockets", "Backend"],
    content: [
      {
        heading: "Choose the right communication model",
        text:
          "Real-time applications can use technologies such as WebSockets, server-sent events, polling, or message queues depending on their requirements."
      },
      {
        heading: "Think about failure scenarios",
        text:
          "Network interruptions, reconnects, duplicate events, delayed messages, and inconsistent state should be considered when designing real-time systems."
      },
      {
        heading: "Observe the system",
        text:
          "Real-time systems benefit from metrics covering connection counts, message latency, errors, throughput, and queue health."
      }
    ]
  },
  {
    id: 12,
    slug: "zero-trust-security-for-modern-applications",
    title: "Zero-Trust Security for Modern Applications",
    author: "Inalgo Security Team",
    date: "January 10, 2026",
    category: "Security",
    readTime: "8 min read",
    image: "🛡️",
    tag: "Security",
    excerpt:
      "Learn the principles behind identity-aware access, least privilege, continuous verification, and secure application architecture.",
    tags: ["Zero Trust", "Security", "Identity"],
    content: [
      {
        heading: "Trust should be continuously evaluated",
        text:
          "Modern security architectures increasingly verify users, devices, applications, and access requests rather than relying solely on network location."
      },
      {
        heading: "Apply least privilege",
        text:
          "Users and services should receive only the permissions required for their responsibilities. Access should be reviewed and adjusted over time."
      },
      {
        heading: "Security should be part of development",
        text:
          "Security controls are more effective when incorporated into development, testing, deployment, monitoring, and incident response processes."
      }
    ]
  }
];

const categories = [
  "All",
  "Technology",
  "Development",
  "Design",
  "AI/ML",
  "Security",
  "Cloud"
];

function Blog() {
  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6);
  const [liked, setLiked] = useState({});
  const [bookmarked, setBookmarked] = useState({});
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const articleSlug = new URLSearchParams(location.search).get("article");

  const activeArticle = useMemo(
    () => blogPosts.find((post) => post.slug === articleSlug),
    [articleSlug]
  );

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        post.author,
        ...post.tags
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [search, category]);

  useEffect(() => {
    setVisible(6);
  }, [search, category]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [articleSlug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? Math.min((scrollTop / documentHeight) * 100, 100)
          : 0;

      document.documentElement.style.setProperty(
        "--reading-progress",
        `${progress}%`
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLike = (id) => {
    setLiked((previous) => ({
      ...previous,
      [id]: !previous[id]
    }));
  };

  const toggleBookmark = (id) => {
    setBookmarked((previous) => ({
      ...previous,
      [id]: !previous[id]
    }));
  };

  const openArticle = (slug) => {
    navigate(`/blog?article=${slug}`);
  };

  const closeArticle = () => {
    navigate("/blog");
  };

  const shareArticle = async (post) => {
    const url = `${window.location.origin}/blog?article=${post.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url
        });
      } catch {
        // User cancelled the share dialog.
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        window.alert("Article link copied to clipboard.");
      } catch {
        window.alert("Unable to copy the article link.");
      }
    }
  };

  const subscribe = (event) => {
    event.preventDefault();

    const email = newsletterEmail.trim();

    if (!email) {
      setNewsletterMessage("Please enter your email address.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterMessage(
      "You're subscribed! New insights will arrive in your inbox."
    );
    setNewsletterEmail("");
  };

  const relatedPosts = activeArticle
    ? blogPosts
        .filter(
          (post) =>
            post.id !== activeArticle.id &&
            post.category === activeArticle.category
        )
        .slice(0, 3)
    : [];

  if (activeArticle) {
    return (
      <>
        <SEO
          title={`${activeArticle.title} | Inalgo Blog`}
          description={activeArticle.excerpt}
          canonicalUrl={`https://inalgo.tech/blog?article=${activeArticle.slug}`}
          openGraph={{
            url: `https://inalgo.tech/blog?article=${activeArticle.slug}`,
            title: activeArticle.title,
            description: activeArticle.excerpt,
            image: "https://inalgo.tech/logo.png"
          }}
          twitter={{
            url: `https://inalgo.tech/blog?article=${activeArticle.slug}`,
            title: activeArticle.title,
            description: activeArticle.excerpt,
            image: "https://inalgo.tech/logo.png"
          }}
        />
        <div className="blog-page article-view">
        <div className="reading-bar" />

        <main className="article-page">
          <div className="container article-container">
            <button className="back-button" onClick={closeArticle}>
              ← Back to Blog
            </button>

            <div className="article-category">
              {activeArticle.category}
            </div>

            <h1>{activeArticle.title}</h1>

            <p className="article-excerpt">
              {activeArticle.excerpt}
            </p>

            <div className="article-meta">
              <span>By {activeArticle.author}</span>
              <span>{activeArticle.date}</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <div className="article-hero">
              <span>{activeArticle.image}</span>
            </div>

            <div className="article-toolbar">
              <button
                className={liked[activeArticle.id] ? "active" : ""}
                onClick={() => toggleLike(activeArticle.id)}
              >
                {liked[activeArticle.id] ? "❤️ Liked" : "🤍 Like"}
              </button>

              <button
                className={bookmarked[activeArticle.id] ? "active" : ""}
                onClick={() => toggleBookmark(activeArticle.id)}
              >
                {bookmarked[activeArticle.id]
                  ? "🔖 Saved"
                  : "🔖 Save"}
              </button>

              <button onClick={() => shareArticle(activeArticle)}>
                ↗ Share
              </button>
            </div>

            <article className="article-content">
              {activeArticle.content.map((section, index) => (
                <section key={index}>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </section>
              ))}

              <div className="article-tags">
                {activeArticle.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </article>

            <section className="related-section">
              <div className="section-heading">
                <span>EXPLORE MORE</span>
                <h2>Related articles</h2>
              </div>

              <div className="related-grid">
                {relatedPosts.map((post) => (
                  <article className="related-card" key={post.id}>
                    <div className="related-icon">{post.image}</div>
                    <span>{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>

                    <button onClick={() => openArticle(post.slug)}>
                      Read article →
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Newsletter
          email={newsletterEmail}
          setEmail={setNewsletterEmail}
          message={newsletterMessage}
          subscribe={subscribe}
        />
      </div>
    </>
    );
  }

  return (
    <div className="blog-page">
      <SEO
        title="Blog | Inalgo"
        description="Explore the latest insights, engineering guides, and AI perspectives from the Inalgo team. Stay updated on technology trends, development best practices, and innovative solutions."
        canonicalUrl="https://inalgo.tech/blog"
        openGraph={{
          url: "https://inalgo.tech/blog",
          title: "Blog | Inalgo",
          description: "Explore the latest insights, engineering guides, and AI perspectives from the Inalgo team. Stay updated on technology trends, development best practices, and innovative solutions.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/blog",
          title: "Blog | Inalgo",
          description: "Explore the latest insights, engineering guides, and AI perspectives from the Inalgo team. Stay updated on technology trends, development best practices, and innovative solutions.",
          image: "https://inalgo.tech/logo.png"
        }}
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Inalgo Blog",
          "description": "Explore the latest insights, engineering guides, and AI perspectives from the Inalgo team. Stay updated on technology trends, development best practices, and innovative solutions.",
          "url": "https://inalgo.tech/blog",
          "sameAs": [
            "https://twitter.com/inalgo",
            "https://linkedin.com/company/inalgo"
          ],
          "blogPost": [
            {
              "@type": "BlogPosting",
              "headline": "The Future of Web Development in 2026",
              "description": "Explore the technologies, architectures, and development practices shaping the next generation of digital products.",
              "image": "https://inalgo.tech/logo.png",
              "author": {
                "@type": "Organization",
                "name": "Inalgo Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Inalgo",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://inalgo.tech/logo.png"
                }
              },
              "datePublished": "2026-03-01",
              "dateModified": "2026-03-01"
            }
          ]
        }}
      />
      <div className="reading-bar" />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="eyebrow">INALGO INSIGHTS</span>
          <h1>
            Ideas that move
            <span> technology forward.</span>
          </h1>
          <p className="lead">
            Practical insights, engineering guides, AI perspectives,
            design thinking, and technology trends from the Inalgo team.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-blog">
        <div className="container">
          <div className="featured-content">
            <div className="featured-copy">
              <span className="featured-label">FEATURED ARTICLE</span>

              <div className="featured-category">
                {blogPosts[0].category}
              </div>

              <h2>{blogPosts[0].title}</h2>

              <p>{blogPosts[0].excerpt}</p>

              <div className="featured-meta">
                <span>{blogPosts[0].author}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>

              <button
                className="btn-primary"
                onClick={() => openArticle(blogPosts[0].slug)}
              >
                Read Full Article →
              </button>
            </div>

            <div className="featured-visual">
              <span>{blogPosts[0].image}</span>
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="blog-controls-section">
        <div className="container">
          <div className="blog-controls">
            <div className="search-wrapper">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search articles"
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Filter by category"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="category-pills">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "selected" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-content">
        <div className="container">
          <div className="results-header">
            <div>
              <span className="section-kicker">LATEST INSIGHTS</span>
              <h2>Explore our articles</h2>
            </div>

            <span className="result-count">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.slice(0, visible).map((post, index) => (
                <article
                  key={post.id}
                  className="blog-card"
                  style={{
                    animationDelay: `${Math.min(index * 70, 500)}ms`
                  }}
                >
                  <div className="card-top">
                    <div className="blog-icon">{post.image}</div>

                    <button
                      className={`bookmark-button ${
                        bookmarked[post.id] ? "saved" : ""
                      }`}
                      onClick={() => toggleBookmark(post.id)}
                      aria-label={`Save ${post.title}`}
                    >
                      {bookmarked[post.id] ? "🔖" : "☆"}
                    </button>
                  </div>

                  <div className="card-labels">
                    <span className="blog-category">
                      {post.category}
                    </span>

                    <span className="blog-tag">
                      {post.tag}
                    </span>
                  </div>

                  <h3>{post.title}</h3>

                  <div className="blog-meta">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="excerpt">{post.excerpt}</p>

                  <div className="article-tags-small">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="blog-footer">
                    <span className="read-time">
                      {post.readTime}
                    </span>

                    <div className="blog-actions">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={liked[post.id] ? "liked" : ""}
                        aria-label={`Like ${post.title}`}
                      >
                        {liked[post.id] ? "❤️" : "🤍"}
                      </button>

                      <button
                        className="read-more"
                        onClick={() => openArticle(post.slug)}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div>🔎</div>
              <h3>No articles found</h3>
              <p>
                Try a different search term or choose another category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                View all articles
              </button>
            </div>
          )}

          {visible < filteredPosts.length && (
            <div className="load-more">
              <button onClick={() => setVisible((prev) => prev + 3)}>
                Load More Articles
                <span>+3</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TOPICS */}
      <section className="topics-section">
        <div className="container">
          <div className="section-heading centered">
            <span>EXPLORE TOPICS</span>
            <h2>What are you interested in?</h2>
          </div>

          <div className="topics-grid">
            {categories.slice(1).map((item) => {
              const count = blogPosts.filter(
                (post) => post.category === item
              ).length;

              return (
                <button
                  key={item}
                  className="topic-card"
                  onClick={() => {
                    setCategory(item);
                    window.scrollTo({
                      top: 600,
                      behavior: "smooth"
                    });
                  }}
                >
                  <span>
                    {item === "Technology" && "💻"}
                    {item === "Development" && "⚙️"}
                    {item === "Design" && "🎨"}
                    {item === "AI/ML" && "🤖"}
                    {item === "Security" && "🔐"}
                    {item === "Cloud" && "☁️"}
                  </span>

                  <strong>{item}</strong>
                  <small>
                    {count} {count === 1 ? "article" : "articles"}
                  </small>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Newsletter
        email={newsletterEmail}
        setEmail={setNewsletterEmail}
        message={newsletterMessage}
        subscribe={subscribe}
      />
    </div>
  );
}

function Newsletter({
  email,
  setEmail,
  message,
  subscribe
}) {
  return (
    <section className="newsletter">
      <div className="container newsletter-container">
        <div className="newsletter-content">
          <span className="eyebrow">STAY IN THE LOOP</span>
          <h2>Technology insights, without the noise.</h2>
          <p>
            Get practical articles, engineering insights, and AI
            updates delivered directly to your inbox.
          </p>
        </div>

        <form className="newsletter-box" onSubmit={subscribe}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address"
          />

          <button type="submit">Subscribe →</button>
        </form>

        {message && (
          <p
            className={`newsletter-message ${
              message.startsWith("You're")
                ? "success"
                : "error"
            }`}
          >
            {message}
          </p>
        )}

        <small>
          No spam. Unsubscribe whenever you want.
        </small>
      </div>
    </section>
  );
}

export default Blog;
