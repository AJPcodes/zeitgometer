'use strict'

const { request, expect } = require('../setup')

module.exports = {

  failFirst: (done) => {
      expect(1).to.equal(1);
      done()
  },

  json: (done) => {
    request
      .get('/popular')
      .expect('Content-Type', /json/)
      .end(done)
  },

  hasProperties: (done) => {
    request
      .get('/popular')
      .end((err, res) => {
        expect(res.body).to.have.property('data')

        let allKeys = Object.keys(res.body.data)

        expect(res.body.data[allKeys[0]]).to.have.property('articles')


        done()
      })
  }
}

