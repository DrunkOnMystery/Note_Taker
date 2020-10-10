const fs = require("fs");
const util = require("util");
// const { response } = require("express");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



//Class for your notes
//Defined function that read, write, and delete
class Store {

  readNote() {
    return readFileAsync("db/db.json", "utf-8");
  }

  writeNote(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }


  addNote(note) {
    return this.readNote()
    .then((data) => JSON.parse(data))
    .then((notes) => [...notes, note])
    .then((newNotes) => this.writeNote(newNotes));
  }

  getNotes() {
    return this.readNote()
    .then((notes) => JSON.parse(notes));
  }

  deleteNote(id) {
    return this.getNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => {
      console.log(filteredNotes);
      this.writeNote(filteredNotes);
    })

  }
  }
module.exports = Store;