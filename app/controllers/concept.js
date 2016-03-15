"use strict";

const database = require('../services/database');

module.exports = {

//no content
  "204": (req, res) => {
    res.status(204).send()
  },

  get: (req, res) => {

    let {conceptId} = req.params

    console.log(req.params)
    console.log('looking up :', conceptId)

    if (!conceptId) {
      res.status(204).send()
    } else {
      database.getConceptById(conceptId, (data) => {res.status(200).json({data: data})})
    }
  }

} //end module exports

