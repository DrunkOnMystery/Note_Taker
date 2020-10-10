const db = require("../db/db.json");
const Store = require("../db/store");
const uuid = require("uuid");
const path = require("path");
var app = require("express");


module.exports = function(app) {

//GET route

  app.get("/api/notes", function(req, res) {
    store
    .read()
    .then((data) => JSON.parse(data))
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
    });


//POST route
  app.post("/api/notes", function (req, res) {
      req.body.id = uuid.v1();
    console.log(req.body);





});

//DELETE
  app.delete("/api/notes", function (req, res){


});




  }