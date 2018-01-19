const models = require('../../models');

///////// VIDEO
const createVideo = (_, {video}) => {
    return models.Video.create(video);
};
const updateVideo = (_, {id, data}) => {
    return models.Video.findOneAndUpdate(id, data);
};
const removeVideo = (_, {id}) => {
    return models.Video.findOneAndRemove(id);
};
const associateVideo = async (_, {videoId, targetId, targetClass}) => {
    let video = await models.Video.findById(videoId);
    console.log(video);
    let target = null;
    switch(targetClass) {
        case "lesson": 
            target = await models.Lesson.findById(targetId);
            break;
        case "module":
            target = await models.Module.findById(targetId);
            break;
        case "course":
            target = await models.Course.findById(targetId);
            break;
        case "document":
            target = await models.Document.findById(targetId);
            break;
        default:
            throw new Error("Target Class not specified");
    };
    console.log(target);
    if(video && target) {
        target.videos.push(video._id);
        target.save();
        console.log(video);
        return video
    }
    return video

}


module.exports = {
    createVideo,
    updateVideo,
    removeVideo,
    associateVideo
};