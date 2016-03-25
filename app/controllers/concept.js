"use strict";

const database = require('../services/database');

module.exports = {

//no content
  "204": (req, res) => {
    res.status(204).send()
  },

  "trending": (req, res) => {
    console.log('getting trending')

    database.getTrending((data) => {res.status(200).json({data: data})}, res)

  },

  "listAll": (req, res) => {

      database.getConceptNames((data) => {res.status(200).json({data: data})}, res)
  },

  "get": (req, res) => {

    let {conceptId} = req.params

    if (!conceptId) {
      res.status(204).send()
    } else {
      database.getConceptById(conceptId, (data) => {res.status(200).json({data: data})}, res)
    }
  }

} //end module exports

