const mongoose = require("mongoose");


const notesSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userid: {
        require: true,
        type: String,
    },
    title: {
        require: true,
        type: String
    },
    content: {
        type: String
    },
    dateadded: {
        type: Date,
        default: Date.now
    }
})

const Note = mongoose.model('notes', notesSchema)

module.exports = Note