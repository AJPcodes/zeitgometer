"use strict";

let mongoose = require('mongoose');

const Concept = mongoose.model('concepts', mongoose.Schema({
  "id": String,
  "label": String,
  "articles": [{}]
}));

module.exports = Concept;

