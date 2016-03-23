"use strict"

const   mongoose = require('mongoose'),
    Trending = require('../../models/Trending');

module.exports = (callback, res) => {


  Trending.findOne()
    .sort({'date': -1})
    .limit(1)
    .exec((err, articles)=>{
      if (err) console.log(err)

      if (!articles) {
        res.status(204).send({data: null})
      } else {

         callback(articles);
      } //end else
  }) // end find

}




