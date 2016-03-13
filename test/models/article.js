'use strict'

const { db, expect } = require('../setup')
const Article = require('../../app/models/article')

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
      date: (new Date())
    });

    obj.save((err, result) => {
      if (err) throw err;

      expect(1).to.equal(1);
      done()

    });
  }
}