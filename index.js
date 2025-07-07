const express = require('express');
const cors = require('cors');
const restAssured = require('./test/ra.json');
const qaSkills = require('./skills/qa.json');
const webProjects = require('./projects/webProjects.json');
const qaProjects = require('./projects/qaProject.json');
const app = express();

// Allow CORS only from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // optional, define allowed methods
  credentials: true // optional, if you're sending cookies or authorization headers
}));

app.use(express.json());

app.get('/api/qa-engineer', (req, res) => {
  res.json(restAssured);
});

app.get('/api/web-projects', (req, res) => {
  res.json(webProjects);
})

app.get('/api/qa-skills', (req, res) => {
  res.json(qaSkills);
});

app.get('/api/qa-projects', (req, res) => {
  res.json(qaProjects);
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('This is the API for the portfolio website.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
