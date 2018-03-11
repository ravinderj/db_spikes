const express = require("express");
const lib = require("./lib/lib.js");
const app = express();

app.use(express.urlencoded({
  extended: false
}));
app.use(express.static('public'));
app.post('/addInfo',lib.addInfo);
app.post('/fetch',lib.fetch);

module.exports = app;
