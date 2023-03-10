const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4999;

const app = express();

// Enabling body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));