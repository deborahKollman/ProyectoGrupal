require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const router = require('./src/routes');
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');

// Middlewares
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser('secret'));
server.use(morgan('dev'));
server.use(express.json());
// server.use(cors());

const whitelist = ['http://localhost:3000', 'http://localhost:4000', 'https://serviexpress-client.vercel.app']
const corsOption = {
  credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization'],
    origin: function (origin, callback){
      if(whitelist.indexOf(origin)!==-1){
        callback(null, true)
      }
      else{
        callback(new Error('Not allowed by CORS'))
      }
    }
}

server.use(
  cors(corsOption)
);
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   next();
// });
server.use(express.static('public'));
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
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    }
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(passport.authenticate('session'));


// root of routes
server.use('/', router);
// Endwares
server.use(({ message }, req, res, next) => {
  console.log(`index error[review the 'server.js' file]: ${message}`);
  res.status(500).send({ message });
});

module.exports = server;
