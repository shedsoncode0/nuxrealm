const router = require('express').Router();
const { register, login } = require('../controllers/authController');

/**
 * @description POST /api/user/register
 */
router.post('/register', register);
router.post('/login', login);


module.exports = router;