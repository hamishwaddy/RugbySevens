## NOTES
##### GraphQL Essential Training with Emmanuel Henri
___

### DEPENDENCIES TO INSTALL
#### GraphQL
* graphql-tools
* express-graphql

#### SQL
* sequelize
* mysql2

___

#### Troubleshooting
If MongoDB is already running when first setting up you'll get a an error syaing the port is already in use. If you need to stop the previous mongodb type
```
sudo lsof -iTCP -sTCP:LISTEN -n -P
```
Search for mongod COMMAND and its PID and type
```
sudo kill <mongo_command_pid>
```
Now restart MongoDB using
```
mongod
```
The other option if you already have a process running in the port 27017 is to try with different port number by typing into the terminal
```
mongod --port 27018
```
Note: You can change the port to the number of your choice.


#### Database Notes
The reason why we're using Sequelize and SQLite is because we're able to create a database or persistence inside of our project without having an external database that is huge and big and create a server like we've done for Mongo.


#### What was covered
**index.js** - setup & link to schema, set graphiql to 'true' & set port number for accessing graphiql.

**schema.js** - the file where 'types' are defined, including queries, inputs & mutations. 

**resolvers.js** - defines how the queries and mutations will be executed (connects to any databases).

**dbConnectors.js** - connections to any database being used (can connect to more than one db).

**Process for creating mutations**
1. Create mutation type on schema.js
2. Write logic for the mutation on resolvers.js
3. Test using graphiql

**Next Steps (if practical for Rugby Project context)**
* Queries with persistence
* Queries with arguments
* Queries with aliases
* Queries with fragments

Consider having ID's with more meaningful readability (Foreign Keys).