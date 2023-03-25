const express = require('express');
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const app = express();
require("dotenv").config();

//variables
const db = "",
    dbConnectionString = process.env.DB_STRING,
    dbName = "sample_mflix",
    collection = "";

//connect to mongo

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log("Connected to database");
        db = client.db(dbName);
        collection = db.collection("movies");
    });