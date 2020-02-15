
const express = require('express');
const path = require('path')
const routes = express.Router();
const User = require('./controllers/users');

routes.post('/api/user/', User.create);
routes.get("/api/user/:id", User.get)
routes.post("/api/user/login/", User.login)

routes.get("/api/teste/:id", User.test);



routes.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
})

module.exports = routes;
