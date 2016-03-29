"use strict"
const   mongoose = require('mongoose'),
    Article = require('../../models/Article'),
    Concept = require('../../models/Concept');


module.exports = (callback) => {


  let data = {}

  Concept.find()
    .where({size: {$gte: 10}})
    .sort({size: -1})
    .limit(40)
    .exec((err, collection)=>{
       if (err) throw err



      let bunchOfCallBacks = [];

      collection.forEach((concept)=>{

        data[concept.label] = {}
        data[concept.label]['articles'] = []

        concept.articles.forEach((articleId)=>{

          let newPromise = new Promise((resolve, reject) => {

            Article.findOne({_id: articleId})
            .exec((err, article)=>{
              if (err) {reject(); throw err}

              if (article) {
                  data[concept.label]._id = concept._id
                  data[concept.label].articles.push({
                  url: article.url,
                  title: article.title,
                  id: article._id
                })
              }
              resolve()
            })
          }) //end promise
          bunchOfCallBacks.push(newPromise)
        }) //end for each
      }) //end for each

    Promise.all(bunchOfCallBacks).then(()=>{
      callback(data)
    });
    }) // end find
} //end exports