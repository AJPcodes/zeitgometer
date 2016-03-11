"use strict";

const express = require('express');
const path = require('path');

const router = express.Router();
const news = require('../controllers/news.js');

router.get('/api/news', news.api);

module.exports = router;