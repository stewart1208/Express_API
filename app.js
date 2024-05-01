const express = require('express');
const app = express();
const router = require('./routes/router');
const connectDB = require('./config/db');
const { PORT } = require('./config/env');

app.use(express.json());

// Connect to the database
connectDB().then(() => {
  // Start the server after successfully connecting to the database
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

app.get('/', (req, res) => {
  res.send('Welcome page');
});

app.use('/', router);
