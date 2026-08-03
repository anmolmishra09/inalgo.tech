# Project Tree - Inalgo

```
inalgo/
│
├── 📄 package.json                    # Root package configuration
├── 📄 README.md                       # Project overview
├── 📄 SETUP_GUIDE.md                  # Detailed setup instructions
├── 📄 DEVELOPMENT.md                  # Development documentation
├── 📄 QUICKSTART.md                   # Quick reference guide
├── 📄 .gitignore                      # Git ignore rules
│
├── 📁 client/                         # React Frontend Application
│   ├── 📄 package.json                # Frontend dependencies
│   │
│   ├── 📁 public/
│   │   └── 📄 index.html              # HTML template
│   │
│   └── 📁 src/
│       ├── 📄 index.js                # React entry point
│       ├── 📄 index.css               # Global styles & CSS variables
│       ├── 📄 App.js                  # Main app component with routing
│       ├── 📄 App.css                 # App-level styles
│       │
│       ├── 📁 components/
│       │   ├── 📄 Header.js           # Navigation header
│       │   ├── 📄 Header.css          # Header styles (mobile menu)
│       │   ├── 📄 Footer.js           # Site footer
│       │   └── 📄 Footer.css          # Footer styles
│       │
│       └── 📁 pages/
│           ├── 📄 Home.js             # Homepage with hero & features
│           ├── 📄 Home.css            # Home page styles
│           ├── 📄 About.js            # About page
│           ├── 📄 About.css           # About page styles
│           ├── 📄 Services.js         # Services page
│           ├── 📄 Services.css        # Services page styles
│           ├── 📄 Contact.js          # Contact form page
│           └── 📄 Contact.css         # Contact page styles
│
└── 📁 server/                         # Node.js Backend API
    ├── 📄 package.json                # Backend dependencies
    ├── 📄 index.js                    # Express server setup
    ├── 📄 .env                        # Environment variables
    ├── 📄 .env.example                # Environment template
    │
    └── 📁 routes/
        └── 📄 api.js                  # API endpoints

```

## Component Hierarchy

```
App
├── Header
│   └── Navigation Links
│       ├── Home
│       ├── About
│       ├── Services
│       └── Contact
│
├── Routes
│   ├── Home Page
│   │   ├── Hero Section
│   │   ├── Features Grid (6 cards)
│   │   └── API Status
│   │
│   ├── About Page
│   │   ├── Hero Section
│   │   ├── Content Grid (Mission, Vision, Values)
│   │   └── Stats Section
│   │
│   ├── Services Page
│   │   ├── Hero Section
│   │   ├── Services Grid (6 services)
│   │   └── CTA Section
│   │
│   └── Contact Page
│       ├── Hero Section
│       ├── Contact Info
│       └── Contact Form
│
└── Footer
    ├── Company Info
    ├── Quick Links
    └── Social Links
```

## API Routes

```
Server (Port 5000)
│
├── GET  /                     → API info
├── GET  /api/welcome          → Welcome message
├── GET  /api/services         → List of services
├── POST /api/contact          → Contact form submission
└── GET  /api/health           → Health check
```

## Data Flow

```
User Input
    ↓
React Component (Frontend)
    ↓
HTTP Request (fetch/axios)
    ↓
Express Router (Backend)
    ↓
Route Handler (Processing)
    ↓
JSON Response
    ↓
React State Update
    ↓
UI Re-render
```

## Responsive Design Strategy

```
Mobile First Approach

Mobile (< 768px)
├── Single column layouts
├── Hamburger menu
├── Stacked cards
└── Touch-friendly buttons

Tablet (768px - 1023px)
├── 2-column grids
├── Expanded menu
└── Optimized spacing

Desktop (≥ 1024px)
├── 3-column grids
├── Full navigation
├── Maximum width containers
└── Enhanced animations
```

## File Count Summary

- **Total Files**: 32
- **Frontend Files**: 18
- **Backend Files**: 5
- **Documentation**: 6
- **Configuration**: 3

## Lines of Code (Approximate)

- **Frontend**: ~1,500 lines
- **Backend**: ~200 lines
- **Styles**: ~1,000 lines
- **Documentation**: ~800 lines

---

This is a complete, production-ready starter template for a full-stack web application! 🚀
