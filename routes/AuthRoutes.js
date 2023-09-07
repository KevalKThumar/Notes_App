const express = require('express')
const router = express.Router()
const { registerController, loginController, getuser, tokenIsValid } = require('../controller/AuthController')

const { auth } = require('../middelwares/auth')

router.post("/register", registerController);

router.post("/login", loginController);

// for token validation
router.post('/tokenIsValid', tokenIsValid);
// for get user:
router.get('/getuser', auth, getuser);


module.exports = router;