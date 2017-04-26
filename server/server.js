require('./config/config.js');

const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

app.listen(process.env.PORT, () => {
  console.log(`Server is up on port ${process.env.PORT}`);
});

module.exports = {
  app
};
