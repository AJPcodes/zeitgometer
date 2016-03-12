"use strict";

const cheerio = require('cheerio');
const _ = require('lodash');
const request = require('request');
const mongoose = require('mongoose');
const News = require('../models/news');

const getNews = function(callback) {

  News.findOne().sort('-_id').exec((err, doc) => {
    if (err) throw err;
    const FifteenMin = 15 * 60 * 1000;

    console.log(doc);
    let diff;

    if (doc) {
    const diff = (new Date() - doc._id.getTimestamp()) - FifteenMin;
    }
    if (diff && diff < 0) {
        console.log('this news is fine!');
       callback(doc.top);
    } else {

      const url = 'http://cnn.com';

      request.get(url, (err, response, html) => {
        if (err) throw err;

        const news = [];
        const $ = cheerio.load(html);

        const $bannerText = $('.banner-text');

          let bannerUrl = $bannerText.closest('a').attr('href');
          if (bannerUrl.split("")[0] === "/") {
            bannerUrl = "http://www.cnn.com" + bannerUrl;
          }

        news.push({
          title: $bannerText.text(),
          url: bannerUrl
        });

        const $cdHeadline = $('.cd__headline');

        _.range(1, 12).forEach(i => {
          const $headline = $cdHeadline.eq(i);

          let linkUrl = $headline.find('a').attr('href');

          if (linkUrl && linkUrl.split("")[0] === "/") {
            linkUrl = "http://www.cnn.com" + linkUrl;
          }

          news.push({
            title: $headline.text(),
            url: linkUrl
          });
        });

        const obj = new News({top: news});

        obj.save((err, result) => {
          if (err) throw err;
          callback(result.top);
        });
      });
    }
  })
};


module.exports = {

  api: (req, res) => {
    getNews((data) => {res.send(data)})
    console.log('news api reached');
    // res.send({'hello': 'world'})
  }

} //end module exports

