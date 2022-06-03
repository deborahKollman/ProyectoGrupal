const {Router} = require('express')
const users_routes = require('./users.js')

const router = Router();

router.use("/users", users_routes)

module.exports= router;