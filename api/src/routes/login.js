require('dotenv').config();
const express = require('express');
const passport = require('passport');

const GoogleStrategy = require('passport-google-oidc');

const emails = ['carlos65357@gmail.com'];

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: '/users',
//       scope: ['profile']
//     },
//     function verify(issuer, user, done) {
//       return done(null, user);
//     }
//   )
// );

// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });

// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

const router = express.Router();

router.get('/user', (req, res) => {
  const user = req.user;
  console.log(user);

  res.send({
    cookies: req.cookies,
    session: req.session,
    user: req.user,
    emails,
    isAuthenticated: req.isAuthenticated(),
    isUnauthenticated: req.isUnauthenticated()
  });
});

router.get('/', passport.authenticate('google'));
router.get(
  '/users',
  passport.authenticate('google', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login'
  })
);

module.exports = router;
