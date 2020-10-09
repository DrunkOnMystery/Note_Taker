const path = require('path');

module.exports = function(app) {

    //takes user to the index page
    app.get("/", function(req, res){
        res.sendFile(path.join(_dirname, "../public/index.html"))
    })

    //takes the user to the notes page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/notes.html"))
    })
}