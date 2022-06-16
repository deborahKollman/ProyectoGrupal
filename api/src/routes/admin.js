const {Router} = require('express');
const {getAllAdmins, getAdminById, postAdmin, updateAdmin, deleteAdmin} = require('../controllers/admin.js')
const router=Router();
const {upload } = require('../middlewares/index.js')

router.get('/',getAllAdmins);
router.get('/:id',getAdminById);
router.post('/',upload.single('avatar_image'),postAdmin);
router.put('/:id',upload.single('avatar_image'),updateAdmin);
router.delete('/:id',deleteAdmin);

module.exports = router;