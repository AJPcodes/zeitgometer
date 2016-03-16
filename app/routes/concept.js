"use strict";

const express = require('express');
const path = require('path');

const router = express.Router();
const concept = require('../controllers/concept.js');

router.get('/concept/', concept["204"])

router.get('/concept/:conceptId', concept.get);

module.exports = router;