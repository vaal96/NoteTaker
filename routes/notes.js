const router = require("express").Router();
const { readFromFile, writeToFile, readAndAppend } = require("../helpers/fsUtils.js");
const uuid = require("../helpers/uuid.js"); 

// -- GET Route for retrieving all the notes -- //
router.get("/notes", async (req, res) => {
    const data = await readFromFile()
    console.info(data);
    res.json(data);
  
});

// -- POST Route for submitting notes -- //
router.post("/notes", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (req.body) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuid(),
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

module.exports = router;

//--- using lesson 11.01.22 as example---//
