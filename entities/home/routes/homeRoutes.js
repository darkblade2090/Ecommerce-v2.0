const logoutGetController = require('../controllers/logoutGetController');
const loadMorePostController = require('../controllers/loadMorePostController');


const express = require('express');
const router = express.Router();

const gethomeController = require('../controllers/gethomeController');

router.get('/', gethomeController);
router.get('/home', gethomeController);

router.route('/logout')
.get(logoutGetController);

router.route('/loadMore')
.post(loadMorePostController);

module.exports = router;