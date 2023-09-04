
const express = require("express");
const { deleteNote, addNote, listOfNote } = require('../controller/NoteController')
const router = express.Router()



router.post("/list", listOfNote);

router.post('/add', addNote)

router.post('/delete', deleteNote)

module.exports = router