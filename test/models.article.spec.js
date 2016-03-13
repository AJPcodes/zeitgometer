'use strict'

describe('model', () => {
  describe('article model', () => {
    const test = require('./models/Article')

    it('creates a new article entry in the database', test['saveNew'])
    it('returns an array of articles from the database', test['getArticles'])

  })
})

