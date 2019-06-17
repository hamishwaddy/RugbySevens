const mysql = require('mysql');
//const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


//  Hardcoded data
const players = [
    {id:'1', name:'John Doe', email:'jdoe@gmail.com', age:35},
    {id:'2', name:'Steve Smith', email:'steve@gmail.com', age:25},
    {id:'3', name:'Sara Williams', email:'sara@gmail.com', age:32},
];


// Customer Type
const PlayerType = new GraphQLObjectType({
    name:'Player',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
});

// Root Query
const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        player:{
            type:PlayerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                /* USING HARD-CODED DATA */
                for(let i = 0;i < players.length;i++){
                    if(players[i].id == args.id){
                        return players[i];
                    }
                }
                
                /* USING AXIOS
                return axios.get('http://localhost:3000/customers/'+ args.id)
                    .then(res => res.data);
                */
               // USING MYSQL


            }
        },
        /*
        // This will link to MySQL db
        players:{
            type: new GraphQLList(PlayerType),
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/customers')
                    .then(res => res.data);
            }
        }
        */
    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addPlayer:{
            type:PlayerType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            /*
            // Needs to reference MySQL db
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/customers', {
                    name:args.name,
                    email: args.email,
                    age:args.age
                })
                .then(res => res.data);
            }
            */
        },
        deletePlayer:{
            type:PlayerType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            /*
            // Reference MySQL db
            resolve(parentValue, args){
                return axios.delete('http://localhost:3000/customers/'+args.id)
                .then(res => res.data);
            }
            */
        },
        editPlayer:{
            type:PlayerType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                name: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            /*
            // Reference MySQL
            resolve(parentValue, args){
                return axios.patch('http://localhost:3000/customers/'+args.id, args)
                .then(res => res.data);
            }
            */
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});