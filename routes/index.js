module.exports = (app) => {
    require('./routes-course')(app);
    require('./routes-lessons')(app);
} 