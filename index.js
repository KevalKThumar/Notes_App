const mongoose = require("mongoose");
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

app.post('/hello', (req, res) => {
  res.send({
    name: "kevalthumar",
    age: "19"
  })
})



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
