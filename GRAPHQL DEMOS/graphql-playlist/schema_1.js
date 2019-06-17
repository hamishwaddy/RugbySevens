// OLD FILE  - 
// HAS BEEN REPLACED BY schema.js - 
// FOR REFERENCE ONLY - 
// TO DELETE

const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLID, 
    GraphQLInt, 
    GraphQLList 
} = graphql;
/*
// dummy data
var players = [
    {name:'Aaron Smith', age: 32, position:'Back', id:'1', teamId:'1'},
    {name:'TJ Perenara', age: 29, position:'Back', id:'2', teamId:'2'},
    {name:'Beauden Barrett', age: 28, position:'Back', id:'3', teamId:'3'},
    {name:'Reiko Ioane', age: 21, position:'Back', id:'4', teamId:'2'},
    {name:'Kieran Reid', age: 34, position:'Forward', id:'5', teamId:'3'},
    {name:'Ardie Savea', age: 26, position:'Forward', id:'6', teamId:'3'}
];
// TEAMS should be an enum type and be a property of 'players'
// not it's own Type
var teams = [
    {name:'Wellington', id:'1'},
    {name:'Auckland', id:'2'},
    {name:'Canterbury', id:'3'},
    
];
*/

/* -- GETS FROM HARD-CODED DATA
const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        age: { type: GraphQLInt},
        position: {type: GraphQLString},
        team: {
            type: TeamType,
            resolve(parent, args){
                return _.find(teams, {id: parent.teamId});
            }
        }
    })
});
*/
// GETS FROM MYSQL DATABASE
const PlayerType = new GraphQLObjectType({
    name: 'Player',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        team: {
            type: TeamType,
            resolve(parent, args){
                return _.find(teams, {id: parent.teamId});
            }
        }
    })
});

const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        age: { type: GraphQLInt},
        books: {
            type: new GraphQLList(PlayerType),
            resolve(parent, args){
                return _.filter(books, {authorId: parent.id});
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        player: {
            type: PlayerType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                //code to get data from db
                return _.find(players, {id: args.id});
            }
        },
        team: {
            type: TeamType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                //code to get data from db
                return _.find(teams, {id: args.id});
            }
        },
        players: {
            type: new GraphQLList(PlayerType),
            resolve(parent, args){
                return players;
            }
        },
        teams: {
            type: new GraphQLList(TeamType),
            resolve(parent, args){
                return teams;
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});