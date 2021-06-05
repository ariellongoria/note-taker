const fs = require("fs");
const path = require("path");

function deleteNote(noteId, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === noteId) {
            notesArray.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notesArray));
        }
    }
}

module.exports = deleteNote;
