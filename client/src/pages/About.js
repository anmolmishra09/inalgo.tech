import React, { useState } from 'react';
import './About.css';
import CTASection from '../components/CTASection';
import Adarsh from "../images/Adarsh.jpg";
import Anmol from "../images/anmol.jpg";

function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Inalgo</h1>
          <p className="lead">Innovative solutions for the modern web</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-content-wrapper">
            <div className="video-card" onClick={openVideo}>
              <img 
                className="video-image"
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                alt="What we do" 
              />
              <div className="play-button">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
                    fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div className="video-text-content">
              <h2 className="section-subtitle">What we do?</h2>
              <div className="gradient-line"></div>
              <p className="video-paragraph">
                Inalgo helps you build faster by transforming your design vision into fully functional,
                production-ready UI components.
              </p>
              <p className="video-paragraph">
                Whether you're launching a SaaS app, landing page or dashboard, our collection of modern
                components is crafted to boost your development speed and improve user experience.
              </p>
              <p className="video-paragraph">
                From UI design systems to automation-ready layouts, Inalgo empowers you to build
                beautifully and scale effortlessly.
              </p>
              <a href="#services" className="read-more-btn">
                <span>Read more</span>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                    fill="#fff" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-content">
        <div className="container">
          <div className="story-section">
            <h2 className="story-title">Our Story</h2>
            <div className="story-content">
              <p>
                Inalgo was born from a simple yet powerful vision: to bridge the gap between innovative ideas 
                and digital reality. In an era where technology evolves at lightning speed, businesses often 
                struggle to keep pace with digital transformation.
              </p>
              <p>
                We recognized that traditional development approaches weren't meeting the demands of modern 
                businesses. Companies needed a partner who could deliver cutting-edge solutions quickly, 
                without compromising on quality or scalability. That's why we created Inalgo.
              </p>
              <p>
                Our name, Inalgo, represents "Innovation in Algorithms" – a testament to our commitment to 
                leveraging smart technology and intelligent automation to solve complex business challenges. 
                We believe that every business, regardless of size, deserves access to world-class digital 
                solutions that drive growth and success.
              </p>
              <p>
                Today, Inalgo stands at the intersection of affordability and excellence. We work with startups 
                building their first MVP, local businesses establishing their online presence, and agencies 
                scaling their operations. Our approach is simple: deliver professional-grade solutions at 
                prices that make sense for growing businesses, all while maintaining the direct communication 
                and flexibility that larger firms can't match.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-block">
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative digital solutions that accelerate growth, 
                enhance efficiency, and deliver measurable results. We're committed to transforming 
                complex challenges into elegant, scalable solutions through cutting-edge technology 
                and exceptional service.
              </p>
            </div>
            
            <div className="content-block">
              <h2>Our Vision</h2>
              <p>
                To be the global leader in digital innovation, recognized for delivering transformative 
                solutions that shape the future of business technology. We envision a world where every 
                organization can leverage the power of intelligent automation and modern web technologies 
                to achieve extraordinary success.
              </p>
            </div>
            

            
            <div className="content-block">
              <h2>Core Values</h2>
              <ul>
                <li><strong>Innovation:</strong> Constantly pushing boundaries and embracing new technologies</li>
                <li><strong>Excellence:</strong> Uncompromising quality in every line of code we write</li>
                <li><strong>Integrity:</strong> Transparent, honest communication in all client relationships</li>
                <li><strong>Collaboration:</strong> Building strong partnerships for mutual success</li>
                <li><strong>Agility:</strong> Adapting quickly to changing needs and market demands</li>
              </ul>
            </div>

            
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <h2 className="section-title">Meet Our Founder</h2>
          <div className="founder-content">
            {/* Image */}
      <div className="founder-image-wrapper">
        <div className="founder-avatar">
          <img 
            src={Anmol}
            alt="Anmol Mishra - CTO"
            className="founder-img"
          />
        </div>
      </div>
            {/* <div className="founder-image-wrapper">
              <div className="founder-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div> */}
            <div className="founder-info">
              <h3>Anmol Mishra</h3>
              <p className="founder-title">Founder & CEO</p>
              <div className="founder-bio">
                <p>
                  Anmol is a visionary technologist and entrepreneur with a passion for creating digital 
                  solutions that make a real difference. With extensive experience in full-stack development 
                  and a deep understanding of modern web technologies, Anmol founded Inalgo to help businesses 
                  navigate the complexities of digital transformation.
                </p>
                <p>
                  Drawing from years of hands-on experience in software development, Anmol recognized the need 
                  for a development partner that could deliver both innovation and reliability. Under his 
                  leadership, Inalgo has grown into a trusted partner for businesses seeking cutting-edge 
                  digital solutions.
                </p>
                <p>
                  Anmol's philosophy is simple: technology should empower, not complicate. This belief drives 
                  every project at Inalgo, ensuring that our solutions are not only powerful but also intuitive 
                  and user-friendly.
                </p>
              </div>
              <div className="founder-social">
                <a href="https://www.linkedin.com/in/anmolmishra09/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a>
                <a href="https://github.com/anmolmishra09" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
                </a>
                <a href="https://instagram.com/anmolmishra09"  target="_blank" rel="noopener noreferrer" className="social-link">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
</a>

{/* <a 
  href="" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
</a> */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTO Section */}
<section className="founder-section">
  <div className="container">
    <h2 className="section-title">Meet Our CTO</h2>

    <div className="founder-content">
      
      {/* Image */}
      <div className="founder-image-wrapper">
        <div className="founder-avatar">
          <img 
            src={Adarsh}
            alt="Adarsh Mishra - CTO"
            className="founder-img"
          />
        </div>
      </div>

      {/* Info */}
      <div className="founder-info">
        <h3>Adarsh Mishra</h3>
        <p className="founder-title">Chief Technology Officer (CTO)</p>

        <div className="founder-bio">
          <p>
            Adarsh Mishra is a passionate technology leader specializing in scalable systems, 
            backend architecture, and modern cloud-based solutions. As CTO of Inalgo, he 
            leads the technical vision and ensures the delivery of secure, high-performance, 
            and innovative digital products.
          </p>

          <p>
            With strong expertise in full-stack development and system design, Adarsh has 
            played a key role in building robust and efficient platforms that solve real-world 
            problems and drive business growth.
          </p>

          <p>
            His vision is to create future-ready technology that empowers businesses to scale 
            effortlessly while maintaining simplicity, performance, and reliability.
          </p>
        </div>

        {/* Social Links */}
        <div className="founder-social">
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/adarshmishra09/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/adarshmishra09" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
          </a>
          {/* Instagram */}
          <a 
  href="https://instagram.com/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
         
        </div>

      </div>
    </div>
  </div>
</section>
      
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        badge="Ready to Start?"
        title="Let's Build Something"
        titleGradient="Amazing Together"
        description="Partner with Inalgo to bring your vision to life with cutting-edge technology."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={closeVideo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Inalgo Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
