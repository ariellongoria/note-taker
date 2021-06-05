//Dependencies
const express = require("express");
const path = require("path");
const generateUniqueId = require("generate-unique-id");

const PORT = process.env.PORT || 3001;

const addNote = require("./utils/addNote");
const deleteNote = require("./utils/delNote");
const notes = require("./db/db.json");

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Endpoints
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.post("/api/notes", (req, res) => {
    req.body.id = generateUniqueId({ length: 8 });
    res.json(req.body);
    addNote(req.body, notes);
});

app.delete("/api/notes/:id", (req, res) => {
    deleteNote(req.params.id, notes);
    res.json({ message: "deleted " + req.params.id });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server now live on port ${PORT}`);
});
