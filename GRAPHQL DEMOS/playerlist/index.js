const express = require('express');
const Sequelize = require('sequelize');
const mysql = require('mysql');
const expressGraphQL = require('express-graphql');
//const schema = require('./schema/schema');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');
const path = require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');

const models = require('./models');

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

// Create connection with mysql
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234abcd',
    database : 'rugby7test'
});

// Connect to mysql db
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});


const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Server running on port 4000");
});