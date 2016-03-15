'use strict'

const cheerio = require('cheerio'),
  _ = require('lodash'),
  request = require('request'),
  databaseMethods = require('../database');

console.log('databaseMethods:', databaseMethods);

module.exports = () => {
  const url = 'http://www.slate.com/full_slate.html'

  equest.get(url, (err, response, html) => {
    if (err) throw err;

    const $ = cheerio.load(html);

    let $headlines = $(".bodyfullslate .long-hed");
    console.log($headlines)
  }
/*
  const url = 'http://www.slate.com';

  request.get(url, (err, response, html) => {
    if (err) throw err;

    const $ = cheerio.load(html);

    let $headlines = $(".title");

    _.range(1, 30).forEach(i => {
      const $headline = $headlines.eq(i);

      let title = $headline.text()
      let linkUrl = $headline.closest('a').attr('href');

      let isNews = true

      if (title && linkUrl) {
       if (
        linkUrl.indexOf('twitter.com/') > -1 ||
        linkUrl.indexOf('www.wired.com/services/newsletters') > -1 ||
        linkUrl.indexOf('pinterest.com/') > -1 ||
        linkUrl.indexOf('youtube.com/') > -1 ||
        linkUrl.indexOf('facebook.com/') > -1 ||
        linkUrl.indexOf('wireds-newsletter') > -1
        ) {
          isNews = false;
        }

        if (isNews) {
          databaseMethods.saveArticle(title, linkUrl, 'wired')
        }
      }

    }) //end range

  })//end request

  */
}


