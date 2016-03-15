"use strict";

const express = require('express');

const router = express.Router();

const popular = require('./popular.js');

router.use(popular);

module.exports = router;