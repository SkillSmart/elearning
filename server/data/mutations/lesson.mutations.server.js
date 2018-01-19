import models from '../../models';

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
const togglePublish = async (_, {lessonId}) => {
    const lesson = models.Lesson.findById(id);
    lesson.published = !lesson.published;
    return lesson;
};





module.exports = {
    createLesson,
    updateLesson,
    removeLesson,
    // Actions
    favLesson,
    togglePublish
};