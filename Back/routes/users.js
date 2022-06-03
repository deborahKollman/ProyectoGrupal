const {Router} = require('express')
const {getUsers,getUserDetail} = require('../controllers/users.js')

const router = Router();

router.get('/',getUsers)
router.get('/:id',getUserDetail)

module.exports=router;