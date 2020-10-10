//Create Const
const Store = require("../db/store");
const path = require("path");
const fs = require("fs");

const output_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(output_DIR, "db.json");

//create needed arrays
let notesArray = [];
let savedNotes = [];

//Pull in function
module.exports = function(app) {


  //get function
    app.get("/api/notes", function(req, res) {
      savedNotes = [];
      fs.readFile(outputPath, 'utf-8', (err, data) => {
        if (err) throw err;
        data = JSON.parse(data)
        for (i=0; i < data.length; i++) {
          savedNotes.push(data[i])
        }

        res.send(savedNotes)
      })
    });

    //post function
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







//delete function
  app.delete("/api/notes/:id",  (req, res) => {
    notesArray = [];
    let noteId = req.params.id;
    console.log(noteId);
    fs.readFile(outputPath, "utf-8", (err, data) => {
      if (err) throw err;
      notesArray = JSON.parse(data);

      const newNotesArray = notesArray.filter(note => note.id != noteId);


      fs.writeFile(outputPath, JSON.stringify(newNotesArray), err => {
        if (err) throw err;
        console.log("deleted");
        res.send(newNotesArray)
      })
    })

});

};


