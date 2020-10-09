const db = require("../db/db.json");
const store = require("../db/store");


module.exports = function(app) {

//GET route

 
  app.get("/api/notes", function(req, res) {



       
    });
//POST route
  app.post("/api/notes", function (req, res) {


// db.json.push(req.body);
});

//DELETE
  app.delete("/api/notes", function (req, res){


});




  }