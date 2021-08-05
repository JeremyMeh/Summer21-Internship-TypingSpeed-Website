const express = require('express');
const axios = require('axios');
const path = require('path');
// const config = require('config');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;


// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/solo', (req, res) => {
  axios.get('http://metaphorpsum.com/sentences/10')
  .then(response => {
    var typingText = response.data;
    console.log(typingText);
    res.json(typingText);
  })
  .catch(error => {
    console.log(error);
  });
  
});

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});