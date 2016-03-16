"use strict"

const   mongoose = require('mongoose'),
    Article = require('../../models/Article'),
    Concept = require('../../models/Concept');


module.exports = (conceptId, callback, res) => {


  let data = {}

  Concept.findById(conceptId, (err, concept)=>{
    if (err)  console.log(err)


    if (!concept) {
      res.status(204).send({data: null})
    } else {

      let bunchOfCallBacks = [];

      data[concept.label] = {}
      data[concept.label]['articles'] = []

      concept.articles.forEach((articleId)=>{

        let newPromise = new Promise((resolve, reject) => {

          Article.findOne({_id: articleId})
          .exec((err, article)=>{
            if (err) {reject(); throw err}
            data[concept.label].articles.push({
              url: article.url,
              title: article.title,
              id: article._id
            })
            resolve()
          })
        }) //end promise
        bunchOfCallBacks.push(newPromise)
      }) //end for each

      Promise.all(bunchOfCallBacks).then(()=>{callback(data)});

    } //end else
    }) // end find
} //end exports



