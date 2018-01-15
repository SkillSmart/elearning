const express = require('express');
const BodyParser = require('body-parser');

const app = express();

require('./connections/mongoose');

app.use(BodyParser.json());
require('./routes')(app);



const port = 8000 || local.env.PORT;

const startUp = async () => {
    await app.listen(port);
    console.log('App listening on port' + port);
};

startUp();