require('dotenv').config();
const express = require('express');
const passport = require('passport');
const { User } = require('../../src/database/postgres');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();

passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    const user = await User.findOne({ where: { email: username } });
    if (!user) {
      return cb(null, false, { message: 'Incorrect username.' });
    }
    if (user.password !== password) {
      return cb(null, false, { message: 'Incorrect password.' });
    }
    return cb(null, {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password
    });
  })
);

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

router.get('/success', (req, res) => {
  if (req.user) {
    return res.status(200).json({
      user: req.user
    });
  }
  res.send(404);
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    failureRedirect: '/login/error'
  }),
  function (req, res) {
    res.redirect('http://localhost:3000');
  }
);

router.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: '/login/error'
  }),
  (req, res) => {
    res.redirect('http://localhost:3000');
  }
);

module.exports = router;
