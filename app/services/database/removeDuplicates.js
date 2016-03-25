"use strict"
const   mongoose = require('mongoose'),
    Concept = require('../../models/Concept');


module.exports = () => {


  let data = {}

  Concept.find()
    .sort('label')
    .select('label _id')
    .exec((err, collection)=>{
       if (err) throw err

        let dupes = {}
        collection.forEach((entry) => {
          if (!dupes[entry.label.replace(/ /g, "")]) {
            dupes[.replace(/ /g, "")] = true
          } else {
            //remove the entry
            Concept.find({_id: entry._id})
            .remove()
          }
        })


    }) // end find
} //end exports