require('dotenv').config();
const express = require('express');
const passport = require('passport');
const { User } = require('../../src/database/postgres');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();
const bcrypt = require('bcryptjs');

// Login With Google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/login/oauth2/redirect/google'
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

router.get('/error', (req, res) => {
  res.send('Hubo algun error');
});

router.get('/success', async (req, res) => {
  if (req.user) {
    const {
      emails: [{ value }]
    } = req.user;
    const user = await User.findOne({
      where: {
        email: value
      }
    });
    if (user) {
      return res.send(user);
    } else {
      return res.send({
        message: 'Este usuario no existe registrate!'
      });
    }
  }
  return res.redirect('http://localhost:3000');
});

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    failureRedirect: '/login/error'
  }),
  function (req, res) {
    res.redirect('http://localhost:3000');
  }
);

// Login Local
passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    const user = await User.findOne({
      where: {
        email: username
      }
    });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        return cb(null, user);
      } else {
        return cb(null, false, { message: 'Incorrect password' });
      }
    }
    return cb(null, false, { message: 'User not found' });
  })
);

router.post('/success', (req, res) => {
  if (req.user) {
    return res.status(200).json({
      user: req.user
    });
  }
  res.send(404);
});

router.post('/error', async (req, res) => {
  const { username } = req.body;

  const user = await User.findOne({
    where: {
      email: username
    }
  });
  if (user) {
    return res.send('Email or password incorrect');
  } else {
    return res.send('User not registered');
  }
});

router.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: '/login/error'
  }),
  (req, res) => {
    res.redirect('http://localhost:3001/login/success');
  }
);

module.exports = router;
