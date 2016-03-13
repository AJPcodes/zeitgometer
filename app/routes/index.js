"use strict";

const express = require('express');

const router = express.Router();

const api = require('./api.js');

router.use(api);

module.exports = router;