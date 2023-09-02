const mongoose = require("mongoose");
const noteRouter = require('./routes/NoteRoutes.js')
const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const Db = require('./config/Db')



app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000;



Db();


app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get('/user', (req, res) => {
  res.send({
    name: "keval",
    age: "19"
  })
})

app.use('/notes', noteRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
