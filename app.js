const express = require('express')
const app = express()

var ejs = require('ejs');

var convert = require('color-convert');
const port = 3001

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index",{convert:convert})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})