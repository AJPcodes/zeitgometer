"use strict";

let mongoose = require('mongoose');

const News = mongoose.model('news', mongoose.Schema({
    top: [{ title: String, url: String, site: String}]
}));

module.exports = News;