const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

// Import JSON test data
const testProjectDataRoutes = require('./data/test/data.test.json');

const app = express();
app.use(express.json());

// Allowed origins
const allowedOrigins = [
    "http://localhost:3000",
    "https://alentra.vercel.app"
];

// CORS setup
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true
    })
);

// Routes
app.get("/", (req, res) => {
    res.send("Server is running with CORS enabled!");
});

app.get('/api/v1/project/test', (req, res) => {
    res.json(testProjectDataRoutes);
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
