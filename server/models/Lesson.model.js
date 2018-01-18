const mongoose = require('mongoose');
const {Schema} = mongoose;


const LessonSchema = new Schema({
    title: String,
    headline: String,
    slug: String,
    content: String,
    lessonVideo: {
        type: Schema.ObjectId,
        ref: 'Video'
    },
    tags: [String],
    createdAt: {type: String, default: Date.now()},
    assigned: {type: Boolean, default: false},
    documents: [{
        type: Schema.Types.ObjectId,
        ref: 'Document'
    }]

})

LessonSchema.pre('save', function(next) {
    if(this.title && !this.slug) {
        this.slug = this.title.replace(' ', '-');
    }
    
    next();
})

LessonSchema.static.findBySlug = function(slug, cb) {
    return this.model('Lesson').find({slug: this.slug}, cb);
}
LessonSchema.query.bySlug = function(slug) {
    return this.find({slug: this.slug});
}


module.exports = mongoose.model('Lesson', LessonSchema);