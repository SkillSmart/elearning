const models = require('../../models');

const courseResolvers = require('./course.mutations.server');

////////// USER
const signup = async (email, password) => {
    let user = models.User.findOne({email});
    if(user) throw new Error('Email already taken')
};
// const login = async (email, password) => {
//     let user = models.User.find({email});
//     if(!user.validatePassword(password)) {
//         throw new Error("Password or Username invalid")
//     };
//     return user;
// };
// const logout = (parentValue, args, context, info) => {
    
// }


// ACTIONS: COURSE
const favCourse = async (_, {userId, courseId}) => {
    let user = models.User.findOne({_id: id});
    user.favs.push(courseId);
    return await user.save();
};

////////// MODULE
const createModule = (_, {title}) => {
    return models.Module.create(title);
};
const updateModule = (_, {id, data}) => {
    return models.Module.findOneAndUpdate({_id: id}, data);
};
const removeModule = (_, {id}) => {
    return models.Module.findOneAndRemove({_id: id});
};

////////// LESSON
const createLesson = (parentValue, {data}, context, info) => {
    return models.Lesson.create(data);
};
const updateLesson = (_, {id, data}) => {
    return models.findOneAndUpdate(id, data);
};
const removeLesson = (_, {id}) => {
    return models.findOneAndRemove(id);
};
// ACTIONS: LESSON
const favLesson = async (_, {userId, lessonId}) => {
    const user = models.User.findOne({_id: id});
    const lesson = models.Lesson.findOne({_id: id});
    user.favoriteLessons.push(lessonId);
    lesson.favs.push(userId);
    await lesson.save();
    return await user.save();
};
const toggleLessonStatus = async (_, {lessonId}) => {
    const lesson = models.Lesson.findById(id);
    lesson.published = !lesson.published;
    return lesson;
};

///////// VIDEO
const createVideo = (_, {title, url}) => {
    return models.Video.create({title, url});
};
const updateVideo = (_, {id, data}) => {
    return models.Video.findOneAndUpdate(id, data);
};
const removeVideo = (_, {id}) => {
    return models.Video.findOneAndRemove(id);
};

///////// DOCUMENT
const createDocument = (_, {title}) => {
    return models.Document.create(title);
};
const updateDocument = (_, {id, data}) => {
    return models.Document.findOneAndUpdate(id, data);
};
const removeDocument = (_, {id}) => {
    return models.Document.findOneAndRemove(id);
};




module.exports = {
    ...courseResolvers,

    // Module
    createModule,
    updateModule,
    removeModule,
    // Lesson
    createLesson,
    updateLesson,
    removeLesson,
    // Video
    createVideo,
    updateVideo,
    removeVideo,
    // Document
    createDocument,
    updateDocument,
    removeDocument,
}