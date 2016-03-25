"use strict"
const   mongoose = require('mongoose'),
    Article = require('../../models/Article'),
    Concept = require('../../models/Concept');


module.exports = (callback) => {


  let data = {}

  Concept.find()
    .sort('label')
    .select('label _id')
    .exec((err, collection)=>{
       if (err) throw err


      callback(collection)
    }) // end find
} //end exports