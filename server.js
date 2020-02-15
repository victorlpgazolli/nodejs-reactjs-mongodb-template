const express = require("express");
const morgan = require("morgan");
const session = require("express-session")
const path = require('path')
const routes = require('./backend/routes');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const server = express();
const mongoose = require('mongoose');
const wakeUp = require('./backend/utils/wakeUp')
app.use(morgan("dev"));
require("dotenv").config();


const DATABASE_URL = "";
const APP_URL = "";


mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true
});

server.use(session({
  name: "sessionID",
  secret: "TheSecretWillRemainSecretOnlyUntilTheSecretisKeptASecret",
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
  resave: true,
  saveUninitialized: false
}))

const URL = process.env.NODE_ENV === 'production' ? APP_URL : "http://localhost:5000";

server.use(bodyParser.json());
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
server.use(express.static(path.join(__dirname, 'frontend/build')));
server.use(routes);

server.listen(port, () => {
  console.log(`Running in ${port}`);
  // WAKE UP HEROKU IDLE PROJECT
  wakeUp(URL + "/api/teste/teste", 0.5);
});