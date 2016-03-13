'use strict'

describe('model', () => {
  describe('concept model', () => {
    const test = require('./models/Concept')

    it('creates a new concept entry in the database', test['saveNew'])
    it('returns an array of concepts from the database', test['getConcepts'])

  })
})

