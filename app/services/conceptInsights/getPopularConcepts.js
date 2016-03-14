"use strict"

const   mongoose = require('mongoose'),
    Q = require('q'),
    Article = require('../../models/Article'),
    Concept = require('../../models/Concept');


module.exports = () => {

  Concept.find({})
    .exec((err, allConcepts)=>{

      allConcepts.forEach((concept) => {

        if (concept.articles.length > 2) {

          concept.articles.forEach((articleId)=>{

            Article.findOne({_id: articleId})
              .exec((err, article)=>{
                console.log("CONCEPT: ", concept.label, "ARTICLE TITLE:", article.title)

            })
          })
        }
      })
    })
}