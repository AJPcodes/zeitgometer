"use strict";

const express = require('express');

const router = express.Router();

const popular = require('./popular.js');
const concept = require('./concept.js');

router.use(popular);
router.use(concept);

module.exports = router;