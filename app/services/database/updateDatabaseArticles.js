"use strict"

const   mongoose = require('mongoose'),
    Q = require('q'),
    Timer = require('../../models/Timer'),
    Article = require('../../models/Article'),
    Concept = require('../../models/Concept'),
    wiredMethods = require('../wired'),
    updateArticle = require('./updateArticle'),
    documentMethods = require('../conceptInsights/document');

module.exports = () => {
  console.log('updating articles')

  Article
    .find()
    .where('concepts').equals([])
    .exec((err, articlesToUpdate)=>{
      if (err) throw err;

      updateArticles(articlesToUpdate);

    })

  const updateArticles = (articlesToUpdate) => {

    articlesToUpdate.forEach((article) => {


      getText(article)
        .then((text)=>{
          documentMethods.createDocument(article, text)
          .then(documentMethods.getConcepts)
            .then((res)=>{

              updateArticle(article, res)


            })
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