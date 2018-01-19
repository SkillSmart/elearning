const mongoose = require('mongoose');
const {Schema} = mongoose;


const LessonSchema = new Schema({
    title: String,
    headline: String,
    slug: String,
    content: String,
    videos: [{
        type: Schema.ObjectId,
        ref: 'Video'
    }],
    documents: [{
        type: Schema.Types.ObjectId,
        ref: 'Document'
    }],
    linkedCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    linkedModules: [{
        type: Schema.Types.ObjectId,
        ref: 'Modules'
    }],
    tags: [String],
    favs: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    createdAt: {type: String, default: Date.now()},
    published: {type: Boolean, default: false},
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