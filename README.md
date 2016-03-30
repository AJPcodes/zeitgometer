# Zeitgometer - About

A student project by Allen Phelps for Nashville Software School

This application reads articles on Slate.com and Wired.com, then uses IBM Watson's Concept Insights API to get a list of related topics based on the article text. This repo holds API logic for a larger project. Please refer to the zeitgometerUI repo for the front end application, which allows users to view concept graphs of articles and discover new content based on concepts.

## Try it out
You would need to set up either a local or remote MongoDB and an IBM Bluemix account with concept insights enabled in order to get this working locally. If you're interested in learning more about that process, feel free to contact me. Otherwise, check out the live demo on Heroku at http://zeitgometerui.herokuapp.com/


## Technologies Used

Node.js with Express and MongoDB with Mongoose along with Cheerio and IBM's Watson Concept Insights API.
