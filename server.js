const express = require('express');
const {Tags, successRoute} = require('./routes/index');

const app = express();
const PORT = process.env.port || 3001;
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
