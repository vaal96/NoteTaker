
//-------------Dependencies-------//
const express = require("express");
const htmlroutes = require("./routes/homepage.js"); // update to my page
const api = require("./routes/notes.js");
//-------------Application-------//
const PORT = process.env.PORT || 3001;
const app = express();
//--- Middleware for parsing JSON and urlencoded form data---//
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Wondering: what extended:true does? I think data parsing
app.use(express.static("public"));
app.use("/api", api);
app.use("/", htmlroutes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
