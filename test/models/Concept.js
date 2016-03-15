'use strict'

const { expect } = require('../setup')
const Concept = require('../../app/models/Concept')

module.exports = {

  saveNew: (done) => {

    const obj = new Concept();

    obj.save((err, result) => {
      if (err) throw err;

      expect(1).to.equal(1);
      done()

    });
  },

  getConcepts: (done) => {

    Concept
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