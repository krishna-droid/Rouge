import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { app } from './app.js';
import { connectDB } from './dataBase/db.js';

// Get __dirname equivalent in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to the database
connectDB();

// Serve static files from the Angular build directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle API routes here

// Handle Angular routing, return all requests to Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000} in ${process.env.NODE_ENV} mode`);
});
