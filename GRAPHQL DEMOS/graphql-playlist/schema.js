const resolvers = require('./resolvers');
const makeExecutableSchema = require('graphql-tools');

const typeDefs = `
    // VARIABLE TYPES
    type Player {
        id: ID!
        name: String!
        gender: Gender!
        team: Team
    }
    type Team {
        id: ID!
        name: TeamName!
    }
    enum Gender {
        MALE
        FEMALE
    }
    enum TeamName {
        WAI
        TAS
        BOP
        HAW 
        MAN
        NHB
    }

    type Query {
        getOnePlayer(id: ID): Player
        getPlayers: [Player]
    }

    // INPUTS
    input PlayerInput {
        id: ID!
        name: String!
        gender: Gender
        team: Team
    }
    input TeamInput {
        id: ID!
        name: TeamName
    }

    // MUTATIONS
    type Mutation {
        createPlayer(input: PlayerInput): Player
        updatePlayer(input: PlayerInput): Player
        deletePlayer(id: ID): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

//export default schema;
