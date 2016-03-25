"use strict"

const   mongoose = require('mongoose'),
    Trending = require('../../models/Trending');

module.exports = (callback, res) => {


  Trending.findOne()
    .sort({'date': -1})
    .limit(1)
    .exec((err, article)=>{
      if (err) console.log(err)

      if (!article) {
        res.status(204).send({data: null})
      } else {

        Trending.find({_id: {$ne: article._id}})
          .remove()
          .exec((err, oldTrends) => {
            if (err) console.log(err)
          })

         callback(article);
      } //end else
  }) // end find

}




