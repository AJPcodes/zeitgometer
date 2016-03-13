"use strict"

const   mongoose = require('mongoose'),
    Article = require('../models/Article');

module.exports = (title, link, website) => {

  const saveArticle = () => {

    var articleToSave = new Article({
        title: title,
        url: link,
        website: website,
        date: (new Date())
       });


    articleToSave.save((err, result) => {
      if (err) throw err;

    })

  }


  Article
    .find({ title: title })
    .exec((err,res) => {
      if (err) console.log(err)

      //save the article if it's not already in database
      if (res.length == 0) {
        saveArticle()
      }
    })

}

