'use strict';

let DB_NAME = process.env.NODE_ENV == 'test' ? "zeitgometerTest" : "zeitgometer"

const
  express = require('express'),
  cors = require('cors'),
  app = express(),
  async  = require('async'),
  routes = require('./routes/'),
  mongoose = require('mongoose'),
  PORT = process.env.PORT || 3000,
  MONGODB_HOST = process.env.MONGODB_HOST || 'localhost',
  MONGODB_PORT = process.env.MONGODB_PORT || '27017',
  MONGODB_USER = process.env.MONGODB_USER || '',
  MONGODB_PASS = process.env.MONGODB_PASS || '',
  MONGODB_NAME = process.env.MONGODB_NAME || DB_NAME;

//mongo setup
const MONGODB_URL_PREFIX = MONGODB_USER  ? `${MONGODB_USER}:${MONGODB_PASS}@` : ''
const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
mongoose.connect(MONGODB_URL);
let db = mongoose.connection;

//middleware to allows CORS
app.use(cors())

app.use(routes)

db.once('open', () => {

  app.listen(PORT, () => {
    console.log(`Zeitgometer API listening on port ${PORT}`);
  });

});

//check for new articles every 5 min
setInterval(
  require('./services/scrapeArticles'),
  5 * 60 * 1000)

//update database every 5 minutes
setInterval(
  require('./services/database').updateDatabaseArticles,
  5 * 60 * 1000)

//update database every 5 minutes
setInterval(
  require('./services/database').mapConcepts,
  5 * 60 * 1000)

//check for new articles and perform database maintenance
require('./services/scrapeArticles')()
require('./services/database').updateDatabaseArticles()
require('./services/database').mapConcepts()


require('./services/slate').getArticleText("http://www.slate.com/blogs/browbeat/2016/03/14/president_obama_and_lin_manuel_miranda_just_freestyled_in_the_rose_garden.html")



const Concept = require('./models/Concept');


  Concept.find()
    .exec((err, collection)=>{
       if (err) throw err

      collection.forEach((concept)=>{

        concept.size = concept.articles.length;
        concept.save((err, result) => {
          if (err) throw err;
        })

    })

module.exports = app
