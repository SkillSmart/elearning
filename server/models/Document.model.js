const mongoose = require('mongoose');
const {Schema} = mongoose;

const DocumentSchema = new Schema({
    title: String,
    filepath: String,
    linkedLessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }]
});

module.exports = mongoose.model('Document', DocumentSchema);