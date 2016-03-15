"use strict"

const   mongoose = require('mongoose'),
    wired = require('./wired'),
    Timer = require('../models/Timer');

module.exports = () => {
  console.log('checking for articles')

  Timer.findOne().sort('-_id').exec((err, stamp) => {
      if (err) throw err;
      const cacheTime = 1 * 60 * 1000; //1 min

      console.log(stamp)

      let diff;

      if (stamp) {
       diff = (new Date() - stamp._id.getTimestamp()) - cacheTime;
      }

      console.log(diff)

      if (diff && diff > 0) {
        console.log('It has been one hour');
        wired.topArticles()

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
