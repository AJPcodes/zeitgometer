"use strict"

const   mongoose = require('mongoose'),
    wired = require('./wired'),
    slate = require('./slate'),
    Timer = require('../models/Timer');

module.exports = () => {

  Timer.findOne().sort('-_id').exec((err, stamp) => {
      if (err) throw err;
      const cacheTime = 60 * 60 * 1000; //1 min


      let diff;

      if (stamp) {
       diff = (new Date() - stamp._id.getTimestamp()) - cacheTime;
      }


      if (diff && diff > 0) {
        console.log('It has been one hour');
        wired.topArticles()
        slate.topArticles()

        const timestamp = new Timer({
         date: (new Date())
        });

        timestamp.save((err, result) => {
          if (err) throw err;
        });

      } else {
        console.log('It has not been one hour', diff)
      }

  })



}
