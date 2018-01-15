const Course = require('../models/course');

module.exports = (app) => {

      ///////////
    // UPDATE Courses:
    app.put('/courses/:id', async({
        body,
        params
    }, res) => {
        try {
            let updates = body;
            let response = await Course.findByIdAndUpdate(params.id, body);
            res.send(response);
        } catch (e) {
            throw e
        }
    })

    ////////
    //GET:
    app.get('/', async(req, res) => {
        res.send('Welcome! Welcome!');
    })

    app.get('/courses', async(req, res) => {
        try {
            let courses = await Course.find({});
            res.send(courses);
        } catch (e) {
            throw e
        }
    });
    app.get('/courses/:id', async(req, res) => {
        try {
            let course = await Course.findById(req.params.id);
            res.send(course);
        } catch (e) {
            throw e
        }

    })

    /////////////
    /// CREATE Courses
    app.post('/courses', async (req, res) => {
        // let body = req.body;
        console.log(req);
        try {
            let response =  await Course.create(req.body);
            res.send(response);     
        } catch (e) {
            throw e;
        }
    });

}