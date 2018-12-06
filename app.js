const express = require('express');
const app = express();

// set up view engine
app.set('view engine', 'ejs');

// create home page
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for request on port 3000')
});