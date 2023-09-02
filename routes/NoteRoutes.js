
const express = require("express");


const router = express.Router()



router.post("/list", async (req, res) => {
    try {
        let notes = await Note.find({ userid: req.body.userid });
        res.json(notes);
    } catch (error) {
        res.status(404).send({
            message: error
        })
    }
});


router.post('/add', async function (req, res) {

    // res.json(req.body);

    try {

        await Note.deleteOne({ id: req.body.id })


        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.connect
        });
        await newNote.save();

        const response = { message: `New Note Created with userid: ${req.body.userid}` };
        res.json(response);
    } catch (error) {
        res.status(401).send({
            message: error
        })
    }
})


router.post('/delete', async function (req, res) {
    await Note.deleteOne({ id: req.body.id })
    const response = { message: `Note deleted`, note: NoteData };
    res.json(response);
})

module.exports = router