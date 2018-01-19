const models = require('../../models');

const userMutations = require('./user.mutations.server')
const courseMutations = require('./course.mutations.server');
const moduleMutations = require('./module.mutations.server');
const lessonMutations = require('./lesson.mutations.server');
const videoMutations = require('./video.mutations.server');
const documentMutations = require('./document.mutations.server');

module.exports = {
    ...courseMutations,
    ...moduleMutations,
    ...lessonMutations,
    ...videoMutations,
    ...documentMutations
};