"use strict";

let mongoose = require('mongoose');

const Article = mongoose.model('articles', mongoose.Schema({
    title: String,
    url: String,
    website: String,
    concepts: [{}],
    date: { type: Date, default: Date.now },
    mapped: ({ type: Boolean, default: false })
}));

module.exports = Article;