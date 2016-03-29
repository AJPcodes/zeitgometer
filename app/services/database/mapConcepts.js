"use strict"

const   mongoose = require('mongoose'),
    Q = require('q'),
    Article = require('../../models/Article'),
    Concept = require('../../models/Concept');


module.exports = () => {

    console.log('mapping articles to concepts')

  Article.find()
    .exec((err, collection) => {
      collection.forEach((article)=>{

        if (!article.mapped) {

        article.mapped = true;

        article.save((err, result) => {
          if (err) throw err;
        })

        }

          article.concepts.forEach((articleConcept)=>{

            Concept.findOne({label: articleConcept.concept.label})
              .exec((err, concept)=>{


                if (!concept) {

                  let newConcept = new Concept({
                    "id": articleConcept.concept.id,
                    "label": articleConcept.concept.label,
                    "articles": [article._id],
                    "size": 1
                  })

                  newConcept.save((err, result) => {
                    if (err) throw err;
                  })
                } else
                // if the concept exists, add the article id to it's list
                {
                 // console.log(concept)
                // console.log('updating', articleConcept.concept.label)
                  if (concept.articles.indexOf(article._id) == -1) {
                    concept.articles.push(article._id)
                  }//end if
                concept.size = concept.articles.length

                concept.save((err, result) => {
                  if (err) throw err;
                })

                } ///end else
              })//end exec
          }) //end for each

        // }//end if

      }) //end for each
    }) //end exec

}