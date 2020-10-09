const fs = require("fs");
const util = require("util");

const { response } = require("express");

//Class for your notes
var notes = [
    {
      routeName: "",
      title: "",
      text: "",
    }
]
//Defined function that read, write, and delete

var newNote = req.body;
newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
console.log(newNote);
notes.push(newNote);
res.json(newNote);