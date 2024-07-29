const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;

app.use(cors());
app.use(express.json());

const dishRoutes = require('./routes/dishes'); 
app.use('/api/dishes', dishRoutes);

