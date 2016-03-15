"use strict"

const   mongoose = require('mongoose'),
    Article = require('../../models/Article');

module.exports = (articleId, callback, res) => {

  let data = {}

  Article.findById(articleId, (err, article)=>{
    if (err) console.log(err)

    if (!article) {
      res.status(204).send({data: null})
    } else {
      callback(article);
    } //end else
  }) // end find
} //end exports



