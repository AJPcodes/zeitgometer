"use strict";

const express = require('express');
const path = require('path');

const router = express.Router();
const cnn = require('../controllers/cnn.js');

router.get('/api/cnn', cnn.api);

module.exports = router;