'use strict'

const cheerio = require('cheerio'),
  Q = require('q'),
  _ = require('lodash'),
  request = require('request');


module.exports = (url) => {

  let deferred = Q.defer();

    request.get(url, (err, response, html) => {
      if (err) console.log(err);

      const $ = cheerio.load(html);

      let articleText = $("#start-of-content p").text();

      deferred.resolve(articleText)

    })//end request


  return deferred.promise;

}

