const express = require('express')
const app = express()
var ejs = require('ejs');
const port = 3001

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})