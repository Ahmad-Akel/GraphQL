const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

app.list(5000, () => console.log('Server is running on port 5000'));
