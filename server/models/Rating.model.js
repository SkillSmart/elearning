const mongoose = require('mongoose');
const {Schema} = mongoose;

const RatingSchema = new Schema({
    rating: Number,
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    comment: String
});



module.exports = mongoose.model('Rating', RatingSchema);