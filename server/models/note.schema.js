const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    title: String,
    note: String,
    author: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = NoteSchema;