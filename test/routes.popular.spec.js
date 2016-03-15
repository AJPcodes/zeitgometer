'use strict'

describe('routes', () => {
  describe('popular route', () => {
    const test = require('./routes/popular')

    it('returns a set of popular topics based on the number of articles flagged', test['fail'])
    it('returns JSON object', test['json'])
    it('has a data property', test['hasProperties'])

  })
})

