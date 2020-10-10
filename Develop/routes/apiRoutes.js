// const db = require("../db/db.json");
const Store = require("../db/store");
// const uuid = require("uuid");
const path = require("path");
// var app = require("express");
const fs = require("fs");

const output_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(output_DIR, "db.json");


let notesArray = [];
let savedNotes = [];

module.exports = function(app) {

//GET route

  // app.get("/api/notes", function(req, res) {
  //   Store
  //   .read()
  //   .then((data) => JSON.parse(data))
  //   .then((notes) => res.json(notes))
  //   .catch((err) => res.status(500).json(err));
  //   });


    app.get("/api/notes", function(req, res) {
      savedNotes = [];
      fs.readFile(outputPath, 'utf-8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data)
        for (i=0; i < data.length; i++) {
          savedNotes.push(data[i])
        }
        console.log(savedNotes);
        res.send(savedNotes)
      })
    });

//POST route
  // app.post("/api/notes", function (req, res) {
  //     req.body.id = uuid.v1();
  //   console.log(req.body);

    app.post("/api/notes", function(req, res) {
      notesArray = [];
      notesArray.push(req.body);
      fs.readFile(outputPath, 'utf-8', (err, data) => {
        if (err) throw err;
        data =JSON.parse(data)
        for (i=0; i <data.length; i++) {
          notesArray.push(data[i])
        }

        for(i=0; i < notesArray.length; i++) {
          notesArray[i].id = i + 1;
        }
        res.send(notesArray);

        fs.writeFile(outputPath, JSON.stringify(notesArray), function(err) {
          if (err) {
            throw err;
          }
          else {
            console.log("you did it");
          }
        })
      })
    })







//DELETE
  app.delete("/api/notes", function (req, res){
    notesArray = [];
    let noteID = req.params.id;

    fs.readFile(outputPath, "utf-8", (err, data) => {
      if (err) throw err;
      notesArray = JSON.parse(data);

      const newNotesArray = notesArray.filter(note =>note.id != noteId);

      console.log(newNotesArray);
      fs.writeFile(outputPath, JSON.stringify(newNotesArray) + "\t", err => {
        if (err) throw err;
        console.log("deleted");
        res.send(newNotesArray)
      })
    })

});

};


