const mongoose = require('mongoose');
const {Schema} = mongoose;

const CourseSchema = new Schema ({
    title: String,
    slug: String,
    subtitle: String,
    summary: String,
    headline: String,
    createdAt: {type: String, default: Date.now()},
    status: {type: String},
    modules: [{
        type: Schema.Types.ObjectId,
        ref: 'Module'
    }],
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],
    quizzes: [{
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    }],
    documents: [{
        type: Schema.Types.ObjectId,
        ref: 'Document'
    }]

});

CourseSchema.methods.findBySlug = function (slug) {
    return this.model('Course').find({ slug});
};


module.exports = mongoose.model('Course', CourseSchema);

