# Inalgo Project - Quick Reference

## Quick Start Commands

```bash
# Install everything
npm run install-all

# Run development (both client & server)
npm run dev

# Run frontend only
npm run client

# Run backend only
npm run server

# Build for production
npm run build
```

## URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API: http://localhost:5000/api

## Project Structure

```
inalgo/
├── client/          # React app
│   ├── src/
│   │   ├── components/   # Header, Footer
│   │   └── pages/        # Home, About, Services, Contact
│   └── public/
├── server/          # Express API
│   ├── routes/
│   └── index.js
└── package.json     # Root config
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/welcome | Welcome message |
| GET | /api/services | List services |
| POST | /api/contact | Submit contact form |
| GET | /api/health | Health check |

## Tech Stack

**Frontend:**
- React 18
- React Router
- CSS3

**Backend:**
- Node.js
- Express
- CORS

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Color Palette

- Primary: `#2563eb`
- Secondary: `#1e40af`
- Text Dark: `#1f2937`
- Text Light: `#6b7280`
- Background: `#f9fafb`

## Features

✅ Fully responsive design
✅ Mobile navigation menu
✅ Multiple pages with routing
✅ Contact form with validation
✅ RESTful API backend
✅ Modern UI with animations
✅ Cross-browser compatible

## File Locations

- Frontend entry: `client/src/index.js`
- Backend entry: `server/index.js`
- Environment vars: `server/.env`
- Global styles: `client/src/index.css`

## Development Tips

1. **Hot Reload**: Changes automatically reload in development
2. **Console Logs**: Check browser console and terminal for errors
3. **Mobile Testing**: Use browser DevTools device mode
4. **API Testing**: Use Postman or browser for endpoint testing

## Common Tasks

### Add a new page:
1. Create `client/src/pages/NewPage.js`
2. Create `client/src/pages/NewPage.css`
3. Add route in `client/src/App.js`
4. Add link in `client/src/components/Header.js`

### Add a new API endpoint:
1. Add route handler in `server/routes/api.js`
2. Test with curl or Postman
3. Update frontend to consume it

### Change colors:
Edit CSS variables in `client/src/index.css` `:root` section

### Modify port:
- Frontend: Prompted automatically if in use
- Backend: Change `PORT` in `server/.env`

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Dependencies missing | `npm run install-all` |
| Port in use | Change in `.env` or kill process |
| API not connecting | Ensure server is running |
| Styles not applying | Clear cache, check CSS specificity |

## Next Steps

1. ✅ Project created
2. 📝 Install dependencies: `npm run install-all`
3. 🚀 Start development: `npm run dev`
4. 🌐 Open http://localhost:3000
5. 📱 Test responsive design
6. 🎨 Customize content and styling
7. 🗄️ Add database (optional)
8. 🔐 Add authentication (optional)
9. 🚢 Deploy to production

---

**Need Help?** Check `SETUP_GUIDE.md` and `DEVELOPMENT.md` for detailed information.
