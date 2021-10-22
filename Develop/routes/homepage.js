const express = require("express");

//---Imports our modular routers---//
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);


module.exports = app;