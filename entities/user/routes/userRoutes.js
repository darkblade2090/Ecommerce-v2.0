const express = require('express');
const router = express.Router();

const loginGetController = require('../controllers/loginGetController');
const loginPostController = require('../controllers/loginPostController');
const signupGetController = require('../controllers/signupGetController');
const signupPostController = require('../controllers/signupPostController');


router.route('/')
.get(loginGetController);


router.route('/login')
.get(loginGetController)
.post(loginPostController);

router.route('/signup')
.get(signupGetController)
.post(signupPostController);



module.exports = router;