'use strict'

const { request, expect } = require('../setup')

module.exports = {

  failFirst: (done) => {
      expect(1).to.equal(1);
      done()
  },

  "204": (done) => {
    request
      .get('/article/')
      .expect(204)
      .end(done)
  },

  "badRequest": (done) => {
    request
      .get('/article/badRequest')
      .expect(204)
      .end(done)
  },

  json: (done) => {
    request
      .get('/article/56e59193841d50bc246a8d17')
      .expect('Content-Type', /json/)
      .end(done)
  },

  hasProperties: (done) => {
    request
      .get('/article/56e59193841d50bc246a8d17')
      .end((err, res) => {
        expect(res.body).to.have.property('data')

        // let allKeys = Object.keys(res.body.data)
        // expect(res.body.data[allKeys[0]]).to.have.property('articles')


        done()
      })
  }
}

