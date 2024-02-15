import { Schema, model } from "mongoose";


const notesSchema = Schema({
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

const Note = model('notes', notesSchema)

export default Note