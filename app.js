const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

//Route(Services)
app.get("/",(req,res) => {
    // res.sendFile(path.join(__dirname, "views/home.html"));
    res.render("home.ejs");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("server is running at "+PORT);
});