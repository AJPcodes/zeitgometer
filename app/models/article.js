"use strict";

let mongoose = require('mongoose');

const Article = mongoose.model('articles', mongoose.Schema({
    title: String,
    url: String,
    website: String,
    concepts: [{
      "score": Number,
      "concept": {
        "id": String,
        "label": String
      }
    }],
    date: { type: Date, default: Date.now }
}));

module.exports = Article;