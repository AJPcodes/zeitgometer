"use strict";

const express = require('express');

const router = express.Router();

const popular = require('./popular.js');
const concept = require('./concept.js');
const article = require('./article.js');

router.use(popular);
router.use(concept);
router.use(article);

module.exports = router;