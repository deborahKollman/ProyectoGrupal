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
    async (accessToken, refreshToken, profile, cb) => {
      const { emails } = profile;
      const user = await User.findOne({
        where: {
          email: emails[0].value
        }
      });

      if (user) {
        console.log('Login success');
        return cb(null, user);
      }
      return cb(null, false);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/login/oauth2/redirect/register'
    },
    async (accessToken, refreshToken, profile, cb) => {
      const { emails } = profile;
      const [user, created] = await User.findOrCreate({
        where: {
          email: emails[0].value
        },
        defaults: {
          email: emails[0].value,
          name: profile.name.givenName,
          last_name: profile.name.familyName,
          avatar_image: profile.photos[0].value
        }
      });

      if (created) {
        console.log(user.toJSON());
        console.log('Register success');
        return cb(null, user);
      } else {
        console.log('Register fail');
        return cb(null, false);
      }
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
  if (Object.keys(req.user).length === 0) {
    console.log('Este usuario no existe');
    res.redirect('http://localhost:3000/register');
  } else {
    console.log('Este usuario ya existe');
    // res.redirect('http://localhost:3000/login');
  }
});

router.get('/success', async (req, res) => {
  if (Object.keys(req.user).length !== 0) {
    return res.status(200).send(req.user);
  }
});

router.put('/confirm', async (req, res) => {
  const { confirmPassword, id } = req.body;

  const user = await User.findByPk(id);

  await user.update({
    password: bcrypt.hashSync(confirmPassword, 10)
  });

  return res.status(200).send(user);
});

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/register',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/oauth2/redirect/register',
  passport.authenticate('google', {
    failureRedirect: '/login/error'
  }),
  (req, res) => {
    res.redirect('http://localhost:3000/confirm');
  }
);

router.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    failureRedirect: '/login/error'
  }),
  function (req, res) {
    res.redirect('http://localhost:3000/home');
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

// router.get('/cookies', (req, res) => {
//   console.log(req.user);
//   if (req.user) {
//     return res.status(200).send({
//       user: req.user
//     });
//   }
//   res.send(404);
//   console.log(req.cookies);
//   req.cookies = {};
//   console.log(req.cookies);
//   res.send('Cookie deleted');
// });

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
    if (req.user) {
      return res.status(200).send({
        user: req.user
      });
    }
    res.send(404);
  }
);

module.exports = router;
