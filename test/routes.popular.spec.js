'use strict'

describe('routes', () => {
  describe('popular route', () => {
    const test = require('./routes/popular')

    it('returns a set of popular topics based on the number of articles flagged', test['failFirst'])
    it('returns JSON object', test['json'])
    it('the object is a dataset with concepts and articles', test['hasProperties'])

  })
})

