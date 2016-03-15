"use strict";

const database = require('../services/database');

module.exports = {

//no content
  "204": (req, res) => {
    res.status(204).send()
  },

  get: (req, res) => {

    let {articleId} = req.params

    if (!articleId) {
      res.status(204).send()
    } else {
      database.getArticleById(articleId, (data) => {res.status(200).json({data: data})}, res)
    }
  }

} //end module exports

