const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/lms', {useMongoClient: true});

module.exports = mongoose;