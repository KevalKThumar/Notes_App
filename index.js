const mongoose = require("mongoose");
const noteRouter = require('./routes/NoteRoutes.js')
const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const Db = require('./config/Db')
const authRouter = require('./routes/AuthRoutes.js')



app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000;



Db();


app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.use('/notes', noteRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
