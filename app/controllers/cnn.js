"use strict";

const cnn = require('../services/cnn');

module.exports = {

  api: (req, res) => {
    cnn.topTen((data) => {res.send(data)})
  }

} //end module exports

