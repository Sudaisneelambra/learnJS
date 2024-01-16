const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/users', (req, res) => {
  const userData = req.body;
  // Process the user data...
  res.send('User data received');
});


