'use strict'

describe('routes', () => {
  describe('article route', () => {
    const test = require('./routes/article')

    it('returns a set of popular topics based on the number of articles flagged', test['failFirst'])
    it('returns 204 (no data) when no id is given', test['204'])
    it('returns 204 (no data) when a bad id given', test['badRequest'])
    it('returns JSON object', test['json'])
    it('JSON object is a article object', test['hasProperties'])

  })
})

