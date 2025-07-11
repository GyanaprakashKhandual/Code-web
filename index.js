const express = require('express');
const cors = require('cors');
const qaGuide = require('./data/guide/QAGuide.json');
const qaSkills = require('./data/skills/QA.json');
const webProjects = require('./data/projects/Web.json');
const qaProjects = require('./data/projects/QA.json');
const github = require('./data/about/Github.json');
const webSkills = require('./data/skills/Web.json');
const daSkills = require('./data/skills/DA.json')


const app = express();


app.use(cors({
  origin: ['http://localhost:3000', 'https://codetestrepeat.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));

app.use(express.json());

// Guide APIs

app.get('/api/qa-guide', (req, res) => {
  res.json(qaGuide);
});

// About APIs 

app.get('/api/git-hub', (req, res) => {
  res.json(github);
});


// Project APIs
app.get('/api/web-projects', (req, res) => {
  res.json(webProjects);
});

app.get('/api/qa-projects', (req, res) => {
  res.json(qaProjects);
});


// Skill APIs

app.get('/api/qa-skills', (req, res) => {
  res.json(qaSkills);
});

app.get('/api/web-skills', (req, res) => {
  res.json(webSkills);
});

app.get('/api/da-skills', (req, res) => {
  res.json(daSkills);
});

// Route Health check
app.get('/', (req, res) => {
  res.send('This is the API for the portfolio website.');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
