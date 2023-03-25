const express = require('express');
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const app = express();
require("dotenv").config();

//variables
let db = "",
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

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors);

app.listen(process.env.PORT || PORT, () => {
    console.log("The app is listening");
});