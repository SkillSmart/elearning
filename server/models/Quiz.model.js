const mongoose = require('mongoose');
const {Schema} = mongoose;

const QuizSchema = new Schema({
    title: String,
    questions: [String],
    answers: [String]
});

module.exports = mongoose.model('Quiz', QuizSchema);