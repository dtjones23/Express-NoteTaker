const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoute = require('./routes/html')

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serves the static files from the public folder
app.use(express.static('public'));
app.use(htmlRoute)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);