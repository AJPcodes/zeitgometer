"use strict";

let mongoose = require('mongoose');

const Timer = mongoose.model('timer', mongoose.Schema({
  date: { type: Date, default: Date.now }
}));

module.exports = Timer;

