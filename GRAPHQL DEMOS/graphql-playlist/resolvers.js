const mysql = require('mysql2');
const Players = require('./dbConnectors');

// RESOLVER MAP
const resolvers = {
    Query: {
        getPlayers: () => {
            return Players.findAll();
        }
    },

    Mutation: {
        createPlayer: (root, { input }) => {
            const newPlayer = new Players({
                name: input.name,
                team: input.teams
            });

            newPlayer.id = newPlayer._id;

            return new Promise((resolve, object) => {
                newPlayer.save((err) => {
                    if(err) reject(err);
                    else resolve(newPlayer);
                });
            });
        }
    }
};

export default resolvers;