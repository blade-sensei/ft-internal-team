const express = require('express');
//const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const contentController = require('./controller/content.controller');
const indexController = require('./controller/index.controller');
const config = require('./config');
//const cors = require('./middlewares/cors');

const app = express();

module.exports = app;

//app.use(bodyParser.json());
//app.use(cookieParser());

// enable cross origin

// adding routes modules
app.use('/', indexController);
app.use('/content', contentController);
app.use((req, res) => {
  res.send(404);
});

// config server
const port = process.env.PORT || config.server.port;
app.listen(port, () => {
  console.info(`server api is running on : ${port} port ...`);
});
