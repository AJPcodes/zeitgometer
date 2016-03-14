"use strict";

const database = require('../services/database');

module.exports = {

  getPopular: (req, res) => {
    database.getPopularConcepts((data) => {res.send(data)})
  }

} //end module exports

