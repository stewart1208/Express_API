const express = require('express');
const app = express();
const router = require('./routes/router');
const connectDB = require('./config/db');
const { PORT } = require('./config/env');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome page');
});
connectDB()
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});