import React, { useState } from 'react';
import './Careers.css';
import GlassButton from '../components/GlassButton';

function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    resume: null,
    coverLetter: ''
  });

  const openApplyForm = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApplyForm = () => {
    setShowModal(false);
    setSelectedPosition(null);
    document.body.style.overflow = 'auto';
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      portfolio: '',
      resume: null,
      coverLetter: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Application submitted:', {
      position: selectedPosition.title,
      ...formData
    });
    alert(`Application submitted for ${selectedPosition.title}! We'll be in touch soon.`);
    closeApplyForm();
  };

  const openPositions = [
    {
      id: 1,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '0 years',
      description: 'Build scalable web applications using React, Node.js, and modern technologies.',
      requirements: [
        'Strong proficiency in React and Node.js',
        'Experience with MongoDB or PostgreSQL',
        'Knowledge of RESTful APIs and GraphQL',
        'Understanding of cloud platforms (AWS/Azure)',
        'Excellent problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'React Native Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '0 years',
      description: 'Create beautiful cross-platform mobile applications for iOS and Android.',
      requirements: [
        'Experience with React Native',
        'Understanding of mobile UI/UX principles',
        'Familiarity with native iOS and Android development',
        'Knowledge of Redux or Context API',
        'App Store and Play Store deployment experience'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '0 years',
      description: 'Design engaging user interfaces and create exceptional user experiences.',
      requirements: [
        'Proficiency in Figma, Adobe XD, or Sketch',
        'Strong portfolio showcasing UI/UX work',
        'Understanding of user-centered design principles',
        'Experience with design systems',
        'Excellent communication skills'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '0 years',
      description: 'Streamline deployment processes and maintain cloud infrastructure.',
      requirements: [
        'Experience with Docker and Kubernetes',
        'Proficiency in CI/CD tools (Jenkins, GitHub Actions)',
        'Strong knowledge of AWS or Azure',
        'Infrastructure as Code experience (Terraform)',
        'Linux system administration skills'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '0 years',
      description: 'Analyze complex data sets and build machine learning models.',
      requirements: [
        'Strong Python programming skills',
        'Experience with ML frameworks (TensorFlow, PyTorch)',
        'Knowledge of statistical analysis',
        'Proficiency in data visualization tools',
        'Understanding of big data technologies'
      ]
    },
    {
      id: 6,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '0 years',
      description: 'Drive digital marketing campaigns and grow our online presence.',
      requirements: [
        'Experience with SEO and SEM',
        'Knowledge of social media marketing',
        'Familiarity with Google Analytics',
        'Content creation skills',
        'Strong analytical mindset'
      ]
    },
    {
      id: 7,
      title: 'Junior Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '0 years',
      isFresher: true,
      description: 'Start your career in web development! Learn and build modern web applications with mentorship.',
      requirements: [
        'Basic knowledge of HTML, CSS, and JavaScript',
        'Familiarity with React or willingness to learn',
        'Understanding of responsive design',
        'Good problem-solving skills',
        'Passion for coding and learning'
      ]
    },
    {
      id: 8,
      title: 'Junior Python Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '0 years',
      isFresher: true,
      description: 'Begin your journey in Python development with hands-on projects and guidance.',
      requirements: [
        'Strong foundation in Python programming',
        'Basic understanding of OOP concepts',
        'Knowledge of databases (SQL)',
        'Eagerness to learn new technologies',
        'Good communication skills'
      ]
    },
    {
      id: 9,
      title: 'Trainee Software Engineer',
      department: 'Engineering',
      location: 'Bengaluru (On-site)',
      type: 'Full-time',
      experience: '0 years',
      isFresher: true,
      description: 'Join our training program and kickstart your software engineering career.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Knowledge of any programming language',
        'Understanding of data structures and algorithms',
        'Strong analytical and problem-solving skills',
        'Team player with good learning attitude'
      ]
    },
    {
      id: 10,
      title: 'Content Writer Intern',
      department: 'Marketing',
      location: 'Remote',
      type: 'Internship',
      experience: '0 years',
      isFresher: true,
      description: 'Create engaging content for our blog, social media, and marketing materials.',
      requirements: [
        'Excellent writing and communication skills',
        'Basic understanding of SEO',
        'Creativity and attention to detail',
        'Ability to research and write on technical topics',
        'Portfolio of writing samples (preferred)'
      ]
    },
    {
      id: 11,
      title: 'UI/UX Design Intern',
      department: 'Design',
      location: 'Remote',
      type: 'Internship',
      experience: '0 years',
      isFresher: true,
      description: 'Learn UI/UX design by working on real projects with our design team.',
      requirements: [
        'Basic knowledge of design tools (Figma, Adobe XD)',
        'Understanding of design principles',
        'Portfolio showcasing design work or projects',
        'Creativity and eye for detail',
        'Willingness to learn and take feedback'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere with flexible hours'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and family'
    },
    {
      icon: '🌴',
      title: 'Paid Time Off',
      description: 'Generous vacation and sick leave policy'
    },
    {
      icon: '🎯',
      title: 'Career Growth',
      description: 'Clear career progression paths'
    },
    {
      icon: '💻',
      title: 'Latest Tech',
      description: 'Work with cutting-edge technologies'
    },
    {
      icon: '🤝',
      title: 'Great Team',
      description: 'Collaborate with talented professionals'
    }
  ];

  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p className="lead">Build the future of technology with talented people who share your passion</p>
        </div>
      </section>

      <section className="why-join-section">
        <div className="container">
          <h2>Why Work With Us?</h2>
          <p className="section-subtitle">We believe in creating an environment where innovation thrives</p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="positions-section">
        <div className="container">
          <h2>Open Positions</h2>
          <p className="section-subtitle">Find your next opportunity with us - <span className="highlight-text">Currently hiring freshers!</span></p>
          
          <div className="positions-list">
            {openPositions.map(position => (
              <div key={position.id} className="position-card">
                <div className="position-header">
                  <div>
                    <div className="title-with-badge">
                      <h3>{position.title}</h3>
                      {position.isFresher && (
                        <span className="fresher-badge">✨ Freshers Welcome</span>
                      )}
                    </div>
                    <div className="position-meta">
                      <span className="meta-item">
                        <span className="meta-icon">🏢</span>
                        {position.department}
                      </span>
                      <span className="meta-item">
                        <span className="meta-icon">📍</span>
                        {position.location}
                      </span>
                      <span className="meta-item">
                        <span className="meta-icon">💼</span>
                        {position.type}
                      </span>
                      <span className="meta-item">
                        <span className="meta-icon">⏱️</span>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="position-description">{position.description}</p>
                
                <div className="position-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => openApplyForm(position)}
                  className="apply-btn-custom"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See a Perfect Fit?</h2>
            <p>We're always looking for talented individuals. Send us your resume and let's talk!</p>
            <GlassButton href="/contact">
              Send Your Resume
            </GlassButton>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && selectedPosition && (
        <div className="modal-overlay" onClick={closeApplyForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeApplyForm}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <h2>Apply for {selectedPosition.title}</h2>
            <p className="modal-subtitle">{selectedPosition.department} • {selectedPosition.location}</p>

            <form onSubmit={handleSubmit} className="apply-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="experience">Years of Experience *</label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 3 years"
                />
              </div>

              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / LinkedIn URL</label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Resume / CV *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="file-input"
                />
                <small>Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell us why you're interested in this position..."
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="button" onClick={closeApplyForm} className="btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
