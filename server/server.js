const express = require('express');
// Middleware
const BodyParser = require('body-parser');
const cors = require('cors');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema = require('./data/schema');

// Load Database Connectors
require('./connections/mongoose');

// Setup Express Server
const app = express();
const PORT = 8000 || local.env.PORT;

app.use(cors());
app.use('/graphql', BodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}));


// Star the server
app.listen(PORT, (err, server) => {
    console.log('Server started on port ' + PORT);    
});         
