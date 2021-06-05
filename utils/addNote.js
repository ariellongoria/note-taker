const fs = require("fs");
const path = require("path");

function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notesArray));
    return note;
}

module.exports = addNote;
