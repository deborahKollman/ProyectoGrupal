require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const router = require('./src/routes');
const session = require('express-session');
const passport = require('passport');
const cookieSession = require('cookie-session');

// Middlewares
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser('secret'));
server.use(morgan('dev'));
server.use(express.json());
// server.use(cors());

server.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:4000',
      'https://serviexpress-client.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
  })
);



server.use(express.static('public'));
server.enable('trust proxy')
server.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000
  })
);
server.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    name: 'session',
    proxy: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'none'
    }
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(passport.authenticate('session'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods',  'true');
  res.header('Access-Control-Allow-Headers', 
  'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// root of routes
server.use('/', router);
// Endwares
server.use(({ message }, req, res, next) => {
  console.log(`index error[review the 'server.js' file]: ${message}`);
  res.status(500).send({ message });
});

module.exports = server;
