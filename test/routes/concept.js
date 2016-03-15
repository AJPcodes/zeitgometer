'use strict'

const { request, expect } = require('../setup')

module.exports = {

  failFirst: (done) => {
      expect(1).to.equal(1);
      done()
  },

  "204": (done) => {
    request
      .get('/concept/')
      .expect(204)
      .end(done)
  },

  "badRequest": (done) => {
    request
      .get('/concept/badRequest')
      .expect(204)
      .end(done)
  },

  json: (done) => {
    request
      .get('/concept/56e8459f65dbcddc52961b70')
      .expect('Content-Type', /json/)
      .end(done)
  },

  hasProperties: (done) => {
    request
      .get('/concept/56e8459f65dbcddc52961b70')
      .end((err, res) => {
        expect(res.body).to.have.property('data')

        // let allKeys = Object.keys(res.body.data)
        // expect(res.body.data[allKeys[0]]).to.have.property('articles')


        done()
      })
  }
}

