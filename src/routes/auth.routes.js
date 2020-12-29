const router = require('express').Router();
const signup = require('../controller/auth.controller');
const {validateUser} = require('../middleware/validation');
const login = require('../controller/auth.controller');
const { loginValidation } = require('../middleware/loginvalidation');
const auth = require('../middleware/auth'); // Aqui estamos integrando el auth de middleware

router.get('../middleware/auth')
router.post('/login',loginValidation,login.login)
router.post('/login',login.login)
router.post('/signup',validateUser,signup.signup);


module.exports = router