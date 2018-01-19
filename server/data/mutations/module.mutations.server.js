const models = require('../../models');

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