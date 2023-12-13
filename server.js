const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoute = require('./routes/html-routes');
const apiRoute = require('./routes/api-routes');
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// serves the static files from the public folder
app.use(express.static('public'));

// routes will be accessible through main app
app.use(htmlRoute);
app.use(apiRoute);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

