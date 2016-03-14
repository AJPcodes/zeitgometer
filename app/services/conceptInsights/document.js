"use strict"
const
  extend = require('util')._extend,
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

const createDocument = (label, title, htmlInput) => {

  var params = {
    'id': '/corpora/co3daq7dif4de0/articles/documents/test',
    'document': {
      'label': `${label}`,
      'parts': [
        {
          'name': 'Title',
          'content-type': 'text/plain',
          'data': `${title}`
        },
        {
          'name': 'Text',
          'content-type': 'text/plain',
          'data': `${htmlInput}`
        }
      ],
      'ttl_hours': 9001
    }
  }

  concept_insights.corpora.createDocument(params, function(err,res) {
    if (err)
      console.log(err);
    else {
      console.log('Created document: ' + params.id)
    }
  });

}

const getConcepts = (documentId) => {

  var docParams = {
    'id': `${documentId}`,
    'limit': 10
  }

  concept_insights.corpora.getRelatedConcepts(docParams, function(err,res) {
    if (err)
      console.log(err);
    else {
      console.log(JSON.stringify(res, null, 2));
    }
  });

}

module.exports = {

  createDocument: createDocument,
  getConcepts: getConcepts

}