const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./data/schema');

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(5500, () => console.log('Running server on port localhost:5500/graphql'));