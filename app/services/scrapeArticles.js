"use strict"

const   mongoose = require('mongoose'),
    Timer = require('../../models/Timer');

module.exports = () => {


  // Timer.findOne().sort('-_id').exec((err, doc) => {
  //     if (err) throw err;
  //     const cacheTime = 60 * 60 * 1000; //1 hour

  //     let diff;

  //     if (doc) {
  //     const diff = (new Date() - doc._id.getTimestamp()) - cacheTime;
  //     }
  //     if (diff && diff < 0) {
  //         console.log('this news is fine!');
  //        callback(doc.top);
  //     } else {


  const timestamp = new Timer({
   date: (new Date())
  });

  timestamp.save((err, result) => {
    if (err) throw err;
  });



}
