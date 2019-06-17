import Sequelize from 'sequelize';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234abcd',
    database: 'rugby7test'
  });
  
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  
  console.log('connected as id ' + connection.threadId);
});

const Players = sequelize.define('players', {
  name: { type: Sequelize.STRING},
  team: { type: Sequelize.STRING}
});

export { Players };