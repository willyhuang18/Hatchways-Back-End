const express = require('express');
const {Tag, blogRoute} = require('./routes/index');
const apicache = require('apicache');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT ||3001;
// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/public')));



app.get('/api/ping', cache('45 minutes'), blogRoute)


app.get('/api/posts/:tags/:sortBy?/:direction?', cache('45 minutes'), Tag);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
