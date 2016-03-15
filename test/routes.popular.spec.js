'use strict'

describe('routes', () => {
  describe('concept route', () => {
    const test = require('./routes/concept')

    it('returns a set of popular topics based on the number of articles flagged', test['failFirst'])
    it('returns 204 (no data) when no id is given', test['204'])
    it('returns JSON object', test['json'])
    it('JSON object is a concept object', test['hasProperties'])

  })
})

