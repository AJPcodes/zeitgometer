"use strict"
const
  extend = require('util')._extend,
  Q = require('q'),
  watson = require('watson-developer-cloud');

  //adds environmental variables from a local .env file
require('dotenv').config();

// Bluemix application settings
// if bluemix credentials exists, then override local

var credentials = extend({
  username: process.env.BLUEMIX_USERNAME,
  password: process.env.BLUEMIX_PASS,
  version: 'v2'
}); // VCAP_SERVICES

var corpus_id = process.env.CORPUS_ID || '/corpora/co3daq7dif4de0/articles';
var graph_id  = process.env.GRAPH_ID ||  '/graphs/wikipedia/en-latest';

// Create the service wrapper
var concept_insights = watson.concept_insights(credentials);

//analyze text

const createDocument = (articleObj, plainText) => {

  let deffered = Q.defer();

  let params = {
    'id': `/corpora/co3daq7dif4de0/articles/documents/${articleObj._id}`,
    'document': {
      'label': `${articleObj._id}`,
      'parts': [
        {
          'name': 'Title',
          'content-type': 'text/plain',
          'data': `${articleObj.title}`
        },
        {
          'name': 'Text',
          'content-type': 'text/plain',
          'data': `${plainText}`
        }
      ],
      'ttl_hours': 9001
    }
  }

  concept_insights.corpora.createDocument(params, (err, res) => {
    if (err) {
      console.log(err)
    }

      deffered.resolve(articleObj._id)

  });

  return deffered.promise

}

const getConcepts = (documentId) => {

  console.log('getting concepts for ', documentId)

  let deferred = Q.defer();

  setTimeout(()=>{

      var docParams = {
        'id': `/corpora/co3daq7dif4de0/articles/documents/${documentId}`,
        'limit': 50
      }

      concept_insights.corpora.getRelatedConcepts(docParams, function(err,res) {
        if (err)
          console.log(err);
        else {
          console.log(res)
          deferred.resolve(res);
        }
      });

  }, 10000)

  return deferred.promise

}

module.exports = {

  createDocument: createDocument,
  getConcepts: getConcepts

}