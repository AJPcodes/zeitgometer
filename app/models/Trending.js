"use strict";

let mongoose = require('mongoose');

const Trending = mongoose.model('trends', mongoose.Schema({
  concepts: Object,
  date: { type: Date, default: Date.now }
}));

module.exports = Trending;