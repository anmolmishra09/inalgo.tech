# Getting Started with Inalgo

This guide will help you set up and run the Inalgo full-stack application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

From the root directory, run:

```bash
npm run install-all
```

This will install dependencies for:
- Root package (for running scripts)
- Client (React frontend)
- Server (Node.js backend)

Alternatively, you can install them separately:

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 2. Environment Configuration

The server uses environment variables. A `.env` file has been created with default values. You can modify it if needed:

```
server/.env
```

### 3. Running the Application

#### Option A: Run Both Client and Server Together (Recommended)

From the root directory:

```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

#### Option B: Run Client and Server Separately

In one terminal (Client):
```bash
npm run client
```

In another terminal (Server):
```bash
npm run server
```

## Project Structure

```
inalgo/
├── client/                 # React frontend
│   ├── public/            # Static files
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── pages/         # Page components
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Services.js
│   │   │   └── Contact.js
│   │   ├── App.js         # Main app component
│   │   ├── App.css
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Global styles
│   └── package.json
│
├── server/                # Node.js backend
│   ├── routes/
│   │   └── api.js        # API routes
│   ├── index.js          # Server entry point
│   ├── .env              # Environment variables
│   └── package.json
│
├── package.json          # Root package.json
├── README.md
└── .gitignore

```

## Available Scripts

### Root Directory

- `npm run dev` - Run both client and server concurrently
- `npm run client` - Run only the frontend
- `npm run server` - Run only the backend
- `npm run install-all` - Install all dependencies
- `npm run build` - Create production build

### Client Directory

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests

### Server Directory

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## API Endpoints

The backend provides the following endpoints:

- `GET /` - API information
- `GET /api/welcome` - Welcome message
- `GET /api/services` - Get all services
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Features

### Frontend
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ React Router for navigation
- ✅ Modern, clean UI
- ✅ Animated components
- ✅ Form validation
- ✅ API integration

### Backend
- ✅ RESTful API
- ✅ Express.js server
- ✅ CORS enabled
- ✅ Error handling
- ✅ Environment configuration

## Testing the Application

1. Open http://localhost:3000 in your browser
2. Navigate through different pages using the menu
3. Test the contact form on the Contact page
4. Check the backend connection status on the Home page
5. Test on different device sizes (use browser dev tools)

## Responsive Breakpoints

The application is optimized for:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `client/build` directory.

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

**Frontend**: The app will prompt you to use a different port
**Backend**: Change the PORT in `server/.env`

### Module Not Found Errors

Run:
```bash
npm run install-all
```

### API Not Connecting

1. Ensure the backend server is running
2. Check that the proxy in `client/package.json` points to the correct port
3. Verify CORS is enabled in `server/index.js`

## Next Steps

### Enhancements you can add:

1. **Database Integration**
   - Add MongoDB or PostgreSQL
   - Implement data persistence

2. **Authentication**
   - Add user login/registration
   - Implement JWT tokens

3. **Additional Features**
   - Blog section
   - Portfolio gallery
   - Admin dashboard

4. **Deployment**
   - Deploy frontend to Vercel/Netlify
   - Deploy backend to Heroku/Railway
   - Set up CI/CD pipeline

## Support

For issues or questions, please check the documentation or create an issue in the repository.

## License

MIT License - feel free to use this project for learning or commercial purposes.
