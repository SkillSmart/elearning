const mongoose = require('mongoose');
const {Schema} = mongoose;

const VideoSchema = new Schema({
    videoTitle: String,
    videoUrl: {type: String, required:true, trim:true},
    transcripts: [String],
    bookmarks: [String],
    ratings: [Number],
    favs: [{
        type: Schema.ObjectId,
        ref: "User"
    }]
})



module.exports = mongoose.model('Video', VideoSchema);