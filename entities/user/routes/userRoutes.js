const express = require('express');
const router = express.Router();

const loginGetController = require('../controllers/loginGetController');
const loginPostController = require('../controllers/loginPostController');
const signupGetController = require('../controllers/signupGetController');
const signupPostController = require('../controllers/signupPostController');
const verifyUserGetController = require('../controllers/verifyUserGetController');
const forgotGetController = require('../controllers/forgotGetController');
const forgotPostController = require('../controllers/forgotPostController');
const forgotUserGetController = require('../controllers/forgotUserGetController');
const forgotUserPostController = require('../controllers/forgotUserPostController');

router.route('/')
.get(loginGetController);


router.route('/login')
.get(loginGetController)
.post(loginPostController);

router.route('/signup')
.get(signupGetController)
.post(signupPostController);

router.route('/verifyUser/:uId')
.get(verifyUserGetController);

router.route('/forgot')
.get(forgotGetController)
.post(forgotPostController)   

router.route('/forgotUser/:uId')
.get(forgotUserGetController)
.post(forgotUserPostController);


module.exports = router;