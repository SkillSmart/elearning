const models = require('../../models');

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

/////////// COURSE
const createCourse = async (_, {title}) => {
    return models.Course.create({title});
};
const updateCourse = (_, {id, data}) => {
    return models.Course.findOneAndUpdate(id, data);
};
const removeCourse = (_, {id}) => {
    return models.Course.findOneAndRemove({_id: id});
};
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
const createLesson = (_, {title, headline, content}) => {
    return models.Lesson.create({title, headline, content});
};
const updateLesson = (_, {id, data}) => {
    return models.findOneAndUpdate(id, data);
};
const removeLesson = (_, {id}) => {
    return models.findOneAndRemove(id);
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
    // User

    // Course
    createCourse,
    updateCourse,
    removeCourse,
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
    // Note
    createNote,
    updateNote,
    removeNote
}