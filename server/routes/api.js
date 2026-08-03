const express = require('express');
const router = express.Router();

// Welcome endpoint
router.get('/welcome', (req, res) => {
  res.json({
    message: 'Welcome to Inalgo! Backend is connected successfully.',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Get all services
router.get('/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Full-stack web application development'
    },
    {
      id: 2,
      name: 'Mobile-First Design',
      description: 'Responsive design for all devices'
    },
    {
      id: 3,
      name: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces'
    }
  ];
  
  res.json({
    success: true,
    data: services
  });
});

// Contact form endpoint
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email format'
    });
  }
  
  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Add to CRM system, etc.
  
  console.log('Contact form submission:');
  console.log({ name, email, subject, message });
  
  res.json({
    success: true,
    message: 'Thank you for contacting us! We will get back to you soon.',
    data: {
      name,
      email,
      receivedAt: new Date().toISOString()
    }
  });
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
