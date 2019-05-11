
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/app-herokuu08'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/app-herokuu08/index.html');
});

app.listen(process.env.PORT || 8080);