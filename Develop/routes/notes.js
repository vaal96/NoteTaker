const notes = require("express").Router();
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid"); 

// -- GET Route for retrieving all the notes -- //
notes.get("/", (req, res) => {
    readFromFile("./db/db.json")
    .then((data => res.json(JSON.parse(data))));
  console.info(`${req.method} request received for note input`);
});

// -- POST Route for submitting notes -- //
notes.post("/", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (req.body) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = { //do i need a response?
      status: "success",
      body: newNote,
    };
    res.json(response);
  } else {
    res.json("Error in posting your note");
  }
});

module.exports = notes;

//--- using lesson 11.01.22 as example---//
