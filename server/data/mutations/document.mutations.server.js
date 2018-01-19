const models = require('./../../models');


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

// ACTIONS
const favDocument = async (_, {id, userId}) => {
    let user = models.User.findById(userId);
    let doc = models.Document.findById(id);
    // Associate the objects
    user.favoriteDocument.push(id);
    doc.favs.push(userId);
    await doc.save();
    return await user.save();
};


module.exports = {
    createDocument,
    updateDocument,
    removeDocument,
    // Actions
    favDocument
};