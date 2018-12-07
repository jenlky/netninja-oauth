require('dotenv').config();

const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');

// set up view engine
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(process.env.dbURL, () => {
  console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);

// create home page
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for request on port 3000')
});