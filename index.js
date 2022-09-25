const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/pages/about.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/about.html"));
});

app.get("/pages/contact-me.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/contact-me.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


