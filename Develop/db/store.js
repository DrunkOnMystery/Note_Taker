const fs = require("fs");
const util = require("util");

const { response } = require("express");

//Class for your notes
class Store {
  constructor(routeName, title, id, text) {
    this.routeName = routeName;
    this.title = title;
    this.id = id;
    this.text = text;
  }
//Defined function that read, write, and delete

  getRouteName() {
    return this.routeName;
  }

  getTitle() {
    return this.title;
  }

  getID() {
    return this.id;
  }

  getText() {
    return this.text;
  }






  }
module.exports = Store;