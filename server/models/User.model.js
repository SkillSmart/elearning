const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type: String, required: true, trim: true},
    joined: {type: Date, default: Date.now()},
    roles: [String],
    courses: [{
        type: Schema.ObjectId,
        ref: "Course"
    }],
    favoriteLessons: [{
        type: Schema.ObjectId,
        ref: 'Lesson'
    }],
    favoriteDocuments: [{
        type: Schema.ObjectId,
        ref: 'Document'
    }],
    favoriteVideos: [{
        type: Schema.ObjectId,
        ref: 'Video'
    }]

});

module.exports = mongoose.model('User', UserSchema);