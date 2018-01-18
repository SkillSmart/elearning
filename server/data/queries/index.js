const models = require('../../models');

//////////////// USER
const userById = (_, {id}) => {
    return models.User.findById(id);
};
const users = (_, {limit}) => {
    return models.User.find({});
};

///////////////// COURSE
const courseById = (_, {id}) => {
    return models.Course.findOne({_id: id});
};
const courseByTitle = (_, {title}) => {
    return models.Course.find({title: title});
};
const courses = () => {
    return models.Course.find({});
};
//////////////// MODULE
const moduleById = (_, {id}) => {
    return models.Module.findOne({_id: id});
};
const modules = () => {
    return models.Module.find({});
};
//////////////// LESSON
const lessonById = (_, {id}) => {
    return models.Lesson.findOne({_id: id});
};
const lessons = () => {
    return models.Lesson.find({});
};
/////////////// VIDEO
const videoById = (_, {id}) => {
    return models.Video.findOne({_id: id});
};
const videos = () => {
    return models.Video.find({});
};


module.exports = {
    // User
    userById,
    users,

    // Course
    courseById,
    courseByTitle,
    courses,
    // Module
    moduleById,
    modules,
    // Lesson
    lessonById,
    lessons,
    // Video
    videoById,
    videos,
    // 
}