"use strict"

const   mongoose = require('mongoose'),
    Article = require('../models/Article');

module.exports = (articleObj, resObj) => {

  articleObj.concepts = resObj.concepts

  articleObj.save((err, result) => {
    if (err) throw err;

  })

}
