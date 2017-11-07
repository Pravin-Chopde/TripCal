const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://trip_app_maker:trip_app_maker@ds251435.mlab.com:51435/trip-db', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

//Error Handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

//response Heandling
let response = {
  status: 200,
  data: [],
  message: null
};

//Get Data 
router.get('/trip', (req, res) => {
  connection((db) => {
    db.collection('trip').find().toArray().then((trip) => {
        console.log("Data aaya", trip);
        response.data = trip[0];
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

module.exports = router;
