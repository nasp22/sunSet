// server/src/app.js

const express = require('express');
const app = express();

// Middleware för att tolka JSON
app.use(express.json());

module.exports = app;
