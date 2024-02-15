
import express from "express";
import { deleteNote, addNote, listOfNote } from '../controller/NoteController.js';

const router = express.Router();



router.get("/list", listOfNote);

router.post('/add', addNote)

router.post('/delete', deleteNote)

export default { router }