module.exports = function(app) {
  const userModel = require("../models/user/user.model.server");
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;
  const bcrypt = require("bcrypt-nodejs");

  passport.serializeUser(serializeUser);
  passport.use(new LocalStrategy(localStrategy));

  // Create User
  app.post("/api/register", register);
  // Get User By Id
  app.get("/api/user/:uid", findUserById);
  // Get User
  app.get("/api/user", findUser);
  // Update User
  app.put("/api/user", updateUser);
  // login
  app.post("/api/login", passport.authenticate("local"), login);
  // logged in
  app.post("/api/loggedIn", loggedIn);
  // logout
  app.post("/api/logout", logout);

  function serializeUser(user, done) {
    done(null, user);
  }

  passport.deserializeUser(deserializeUser);

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function(user) {
        done(null, user);
      },
      function(err) {
        done(err, null);
      }
    );
  }

  async function localStrategy(username, password, done) {
    const data = await userModel.findUserByUsername(username);
    if (data && bcrypt.compareSync(password, data.password)) {
      return done(null, data);
    } else {
      return done(null, false);
    }
  }

  function login(req, res) {
    const user = req.user;
    res.json(user);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : "0");
  }

  async function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    const data = await userModel.createUser(user);
    req.login(data, function(err) {
      res.json(data);
    });
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  async function findUserById(req, res) {
    const userId = req.params["uid"];
    const data = await userModel.findUserById(userId);
    res.json(data);
  }

  async function findUser(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if (username && password) {
      const data = await userModel.findUserByCredentials(username, password);
      res.json(data);
      return;
    }

    if (username) {
      const data = await userModel.findUserByUsername(username);
      res.json(data);
      return;
    }
  }

  async function updateUser(req, res) {
    const user = req.body;
    const uid = user._id;
    const data = await userModel.updateUser(uid, user);
    res.json(data);
  }
};
