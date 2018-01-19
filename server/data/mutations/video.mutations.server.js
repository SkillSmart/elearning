import model from '../../models';

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


module.exports = {
    createVideo,
    updateVideo,
    removeVideo
};