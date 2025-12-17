// index.js
const dotenv=require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/hello', (req, res) => {
  res.send('Hello from Node.js!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
