const mongoose = require('mongoose');
const {Schema} = mongoose;

const ModuleSchema = new Schema({
    title: String,
    headline: String,
    author: [{type: Schema.ObjectId, ref: 'User'}],
    associatedCourses: [{type: Schema.ObjectId, ref: 'Course'}],
    lessons: [{type: Schema.ObjectId, ref: 'Lesson'}]
});

module.exports = mongoose.model('Module', ModuleSchema);