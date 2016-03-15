"use strict";

const express = require('express');
const path = require('path');

const router = express.Router();
const popular = require('../controllers/popular.js');

router.get('/api/popular', popular.getPopular);

module.exports = router;