const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/crud-app', (err,db) => {
        if(err) return console.log(err);

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
router.get('/crud', (req, res) => {
    connection((db) => {
        db.collection('crud')
        .find()
        .toArray()
        .then((crud) => {
            response.data = crud;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });
    });
});


module.exports = router;