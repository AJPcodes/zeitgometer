'use strict';

const
  express = require('express'),
  app = express(),
  extend = require('util')._extend,
  watson = require('watson-developer-cloud'),
  async  = require('async'),
  PORT = process.env.PORT || 3000;

// Bootstrap application settings
require('dotenv').config();

// if bluemix credentials exists, then override local
var credentials = extend({
  username: process.env.BLUEMIX_USERNAME,
  password: process.env.BLUEMIX_PASS,
  version: 'v2'
}); // VCAP_SERVICES

var corpus_id = process.env.CORPUS_ID || '/corpora/public/TEDTalks';
var graph_id  = process.env.GRAPH_ID ||  '/graphs/wikipedia/en-latest';

// Create the service wrapper
var concept_insights = watson.concept_insights(credentials);


//search for a concept
// var params = {
//   id: '/graphs/wikipedia/en-latest/concepts/Nashville'
// }

// concept_insights.graphs.getConcept(params, function(err, res) {
//   if (err)
//     console.log(err);
//   else {
//     console.log(JSON.stringify(res, null, 2));
//   }
// });


//analyze text
// var params = {
//   graph: '/graphs/wikipedia/en-latest',
//   text: `Well, this—from Politico—makes sense:

// President Barack Obama's approval rating is the highest it has been since May 2013, according to the results of the latest weekly Gallup tracking poll.
// Overall, 50 percent of those surveyed said they approve of the job the president is doing so far in his final 365 days in office.
// I'm not a highly paid political strategist, but it seems like there is a pretty obvious reason why Obama's poll numbers would be rising right now, namely: The dawning sense of terror enveloping Americans who are realizing that they are going to have to replace him with, probably, Donald Trump or Hillary Clinton. Trump would be the most-disliked non-incumbent nominee since at least 1992—and Hillary Clinton would be the second-most-disliked.'`
// }
// concept_insights.graphs.annotateText(params, function(err, res) {
//   if (err)
//     console.log(err);
//   else {
//     console.log(JSON.stringify(res, null, 2));
//   }
// });




app.listen(PORT);
console.log('listening at:', PORT);
