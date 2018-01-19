const models = require('../../models');


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

module.exports = {
    createCourse, 
    updateCourse,
    removeCourse,
    // Actions
    favCourse,
};