"use strict"

const   mongoose = require('mongoose'),
    Article = require('../../models/Article');

module.exports = (callback, res) => {

  let data = {}

  Article.find()
    .where({ 'concepts': { $ne: [] } })
    .sort({'date': -1})
    .limit(20)
    .exec((err, articles)=>{
      if (err) console.log(err)

      if (!articles) {
        res.status(204).send({data: null})
      } else {
        callback(articles);
      } //end else
  }) // end find

}



