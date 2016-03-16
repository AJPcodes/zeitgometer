"use strict";

const database = require('../services/database');

module.exports = {

  getPopular: (req, res) => {
    database.getPopularConcepts((data) => {res.status(200).json({data: data})})
  }

} //end module exports

