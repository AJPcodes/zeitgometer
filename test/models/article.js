'use strict'

const { expect } = require('../setup')
const Article = require('../../app/models/Article')

module.exports = {

  saveNew: (done) => {

    const obj = new Article({
      title: 'Test',
      url: 'www.google.com',
      website: 'google',
      concepts: [{
        "score": 99,
        "concept": {
          "id": 'testId',
          "label": 'search engine'
        }
      }],
      date: (new Date()),
      mapped: false

    });

    obj.save((err, result) => {
      if (err) throw err;

      expect(1).to.equal(1);
      done()

    });
  },

  getArticles: (done) => {

    Article
      .find()
      .limit(10)
      .sort('-date')
      .exec((err, data)=>{
        expect(data).be.a('array')
        expect(data[0]).be.a('object')
        expect(data[0]).have.property('_id')
        done()
      });



  }
}