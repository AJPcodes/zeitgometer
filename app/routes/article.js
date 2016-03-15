"use strict";

const express = require('express');
const path = require('path');

const router = express.Router();
const article = require('../controllers/article.js');

router.get('/article/', article["204"])

router.get('/article/:articleId', article.get);

module.exports = router;