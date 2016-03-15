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


// 'use strict'

// const { expect, request } = require('../../setup')

// module.exports = {
//   417: (done) => {
//     request
//       .post('/attack')
//       .expect(417)
//       .end(done)
//   },

//   '417_attacker': (done) => {
//     request
//       .post('/attack')
//       .query({ attackee: '123' })
//       .expect(417)
//       .end(done)
//   },

//   '417_attackee': (done) => {
//     request
//       .post('/attack')
//       .query({ attacker: 'abc' })
//       .expect(417)
//       .end(done)
//   },

//   200: (done) => {
//     request
//       .post('/attack')
//       .query({ attacker: 'abc', attackee: '123' })
//       .expect(200)
//       .end(done)
//   },



//   newState: (done) => {
//     request
//       .post('/attack')
//       .query({ attacker: 'abc', attackee: '123' })
//       .end((err, res) => {
//         expect(res.body).to.have.property('abc')
//         expect(res.body).to.have.property('123')
//         done()
//       })
//   }
// }