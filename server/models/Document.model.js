const mongoose = require('mongoose');
const {Schema} = mongoose;

const DocumentSchema = new Schema({
    title: String,
    filepath: String,
    linkedLessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    favs: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Document', DocumentSchema);