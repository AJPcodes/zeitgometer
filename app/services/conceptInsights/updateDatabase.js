"use strict"

const   mongoose = require('mongoose'),
    Q = require('q'),
    Timer = require('../../models/Timer'),
    Article = require('../../models/Article'),
    Concept = require('../../models/Concept'),
    wiredMethods = require('../wired'),
    documentMethods = require('./document');

module.exports = () => {

  Article
    .find()
    .where('concepts').equals([])
    .exec((err, articlesToUpdate)=>{
      if (err) throw err;

      update(articlesToUpdate);

    })

  const update = (articlesToUpdate) => {

    articlesToUpdate.forEach((article) => {


      getText(article)
        .then((text)=>{
          console.log(text)
          console.log('gotText')
        })


    })
  }

  const getText = (article) => {

    let deferred = Q.defer();

    if (article.website == 'wired') {

      deferred.resolve(wiredMethods.getArticleText(article.url))

    }

    return deferred.promise;

  }

}
