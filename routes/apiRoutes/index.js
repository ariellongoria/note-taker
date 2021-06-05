const router = require("express").Router();
const { addNote, deleteNote } = require("../../utils/notes");
const generateUniqueId = require("generate-unique-id");
const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = generateUniqueId({ length: 8 });
    res.json(req.body);
    addNote(req.body, notes);
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id, notes);
    res.json({ message: "deleted " + req.params.id });
});

module.exports = router;
