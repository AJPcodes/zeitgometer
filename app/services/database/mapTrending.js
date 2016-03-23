"use strict"

const   mongoose = require('mongoose'),
    Q = require('q'),
    Article = require('../../models/Article'),
    Trending = require('../../models/Trending'),
    Concept = require('../../models/Concept');


module.exports = () => {

  let trends = {}

  Article.find()
    .sort(-Date)
    .limit(100)
    .exec((err, collection) => {
      collection.forEach((article)=>{


          article.concepts.forEach((articleConcept)=>{

            articleConcept.concept.label = articleConcept.concept.label.replace(/\./g, "")

            if (!trends[articleConcept.concept.label]) {
              trends[articleConcept.concept.label]= {size: 1,
                                                      articles: [article]}

            } else {
              trends[articleConcept.concept.label].size++
              trends[articleConcept.concept.label].articles.push(article)

            }
          }) //end for each

      }) //end for each

    let trendsKeys = (Object.keys(trends))

    trendsKeys.forEach((key) => {

      if (trends[key].size < 4) {
        delete trends[key]
      }

    })


    let latestTrends = new Trending({
      "concepts": trends,
    })

    latestTrends.save((err, result) => {
      if (err) throw err;
    })

    }) //end exec

}