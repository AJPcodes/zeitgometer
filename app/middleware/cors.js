'use strict'

module.exports = function(){
  return (req, res, next) => {
    console.log(req.headers)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");
    console.log(res.header()['_headers'])
    if (req['method'] === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  }
}