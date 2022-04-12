const express = require('express');
const {Tags, successRoute} = require('./routes/index');
const apicache = require('apicache');

const app = express();
const cache = apicache.middleware;
const PORT = process.env.port || 3001;
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/api/ping', cache('45 minutes'), successRoute)


app.get('/api/posts/:tags/:sortBy?/:direction?', cache('45 minutes'), Tags);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
