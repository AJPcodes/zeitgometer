'use strict'

const
  chai = require('chai'),
  app = require('../../app'),
  supertest = require('supertest'),
  request = supertest.agent(app.listen())

module.exports = {
  expect: chai.expect,
  request
}


