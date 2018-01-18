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

});

module.exports = mongoose.model('User', UserSchema);