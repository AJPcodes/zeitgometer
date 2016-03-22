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

var corpus_id = process.env.CORPUS_ID || '/corpora/co3daq7dif4de0/articles1';
var graph_id  = process.env.GRAPH_ID ||  '/graphs/wikipedia/en-latest';

// Create the service wrapper
var concept_insights = watson.concept_insights(credentials);


module.exports = () => {


  concept_insights.accounts.getAccountsInfo({}, function(err, res) {
    if (err)
      console.log(err);
    else {

      //{ accounts: [ { account_id: 'asdasdasdf' } ] }
      var params = {
        corpus: `/corpora/${res.accounts[0].account_id}/articles1`,
        access: 'public',
        ttl_hours: 672 //4 weeks
      }
      concept_insights.corpora.createCorpus(params, function(err,res) {
        if (err)
          console.log(err);
        else {
          console.log('Created corpus: ' + params.corpus);
        }
      });
    }
  });

}