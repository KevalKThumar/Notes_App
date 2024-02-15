
import bodyParser from 'body-parser';
import express from "express";
import cors from 'cors';
import Db from './config/Db.js';
import {
  deleteNote,
  addNote,
  listOfNote
} from './controller/NoteController.js';

const app = express();




app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000;



Db();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get('/list', listOfNote);
app.post('/add', addNote);
app.delete('/delete', deleteNote);


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
