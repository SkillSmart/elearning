const Lesson = require('../models/lesson');


module.exports = (app) => {

    app.get('/lessons', async (req, res) => {
        try {
            let lessons = await Lesson.find();
            res.send(lessons);
        } catch (e) {
            throw e;
        }
    })

    app.get('/lessons/:lessonSlug', async (req, res) => {
        try {
            let lesson = await Lesson.findOne({slug: req.params.lessonSlug});
            res.send(req.params.lessonSlug)
        } catch (e) {
            throw e;
        }
    })

    ///////
    // SAVE Lessons
    app.post('/lessons', async (req, res) => {
        
        try {
            let response = await Lesson.create(req.body);
            res.send(response);
        } catch (e) {
            throw e
        }        
    })
}