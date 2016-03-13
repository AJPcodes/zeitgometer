'use strict'

describe('model', () => {
  describe('article', () => {
    const test = require('./models/article')

    it('creates a new article entry in the database', test['saveNew'])
    it('returns an array of articles from the database', test['getArticles'])

  })
})

