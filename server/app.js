const express = require('express');
const apiRoutes = require('./routes/api.routes');
const cors = require('cors');

// Env setting
require('dotenv').config();

// Database seting
require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});