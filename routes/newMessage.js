const express = require('express');
const router = express.Router();
const displayForm = require('../controllers/newMessageController');

router.get('/', displayForm)

module.exports = router;

