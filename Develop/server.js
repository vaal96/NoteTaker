
//-------------Dependencies-------//
const express = require("express");
const path = require("path");
const api = require("./routes/homepage.js"); // update to my page
//-------------Application-------//
const PORT = process.env.PORT || 3001;
const app = express();
//--- Middleware for parsing JSON and urlencoded form data---//
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Wondering: what extended:true does? I think data parsing
app.use(express.static("public"));
app.use("/api", api);
//---GET Route for notes.page---//
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
//---WILD Route for Homepage---/
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
