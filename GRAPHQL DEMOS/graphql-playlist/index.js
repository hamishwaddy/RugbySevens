const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./server/schema/schema');
const Sequelize = require('sequelize');
const mysql = require('mysql2');
// import express from 'express';
// import graphqlHTTP from 'express-graphql';
// import schema from './schema/schema.js';
// import Sequelize from 'sequelize';
// import mysql from 'mysql2';


const app = express();
const PORT = 4000;

// connect to mysql database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'rugby7test'
//   });

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on localhost:${PORT}/graphql');
});