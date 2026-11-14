
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Inalgo API',
    version: '1.0.0',
    status: 'running'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Application error:', err);

  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message:
      process.env.NODE_ENV === 'development'
        ? err.message
        : 'Something went wrong'
  });
});

const PORT = Number(process.env.PORT) || 5001;

const server = app.listen(PORT, '127.0.0.1', () => {
  console.log('================================');
  console.log('INALGO BACKEND STARTED');
  console.log(`Server: http://127.0.0.1:${PORT}`);
  console.log(`API: http://127.0.0.1:${PORT}/api`);
  console.log('Status: RUNNING');
  console.log('================================');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

process.on('SIGINT', () => {
  console.log('Stopping server...');

  server.close(() => {
    console.log('Server stopped.');
    process.exit(0);
  });
});
