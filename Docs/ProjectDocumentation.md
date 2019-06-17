# **RUGBY SEVENS APP**
## **Project Documentation** 

> *In order to build the learning of another skillset into this project, I have decided to write my project documentation in 'markdown'. Using markdown to write up any sort of documentation will be beneficial across any number of future projects.*

<br>
<br>
I have organised my project into two sections:<br>
1. GraphQL documentation <br>
2. Database Info<br>

<br>
<br>

## **1. GraphQL Documentation**  
![GraphQL Logo](https://marmelab.com/images/blog/graphql/logo.png)

---


### **FILE STRUCTURE**
**index.js** - server setup & link to the schema, set graphiql to 'true' & set port number for accessing graphiql.

**schema.js** - the file where 'types' are defined, including queries, inputs & mutations. 

**resolvers.js** - defines (resolves) how the queries and mutations will be executed (connects to any databases).

**dbConnectors.js** - connection credentials to any database being used (can connect to more than one db).
<br>
<br>

**GUIDE TO CREATING MUTATIONS**
1. Create mutation type on schema.js
2. Write logic for the mutation on resolvers.js
3. Test using graphiql

<br>

**NEXT STEPS (if practical for Rugby Project context)**
* Queries with persistence
* Queries with arguments
* Queries with aliases
* Queries with fragments

<br>

### **DEPENDENCIES TO USE**
Dependencies are required to add services and functionality to the project. Different middleware are available depending on what stack is being used. This middleware can be installed directly into the the project using either **NODE** or **YARN** package managers.

#### GraphQL
These packages enable graphql to connect and work with an express server and are required in the project.

* graphql-tools
* express-graphql

#### SQL
Middleware packages are also required to help with connections to a database. The ones I have used, as part of my learning process, have been:
* sequelize
* mysql2 (allows connection to external MySQL db)
* sqlite (allows for creation of local db - good for learning but not practical for Rugby Project).



<br>
<br>

## **2. Database Info**  
![Database Info](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgH1A-ut7wS_PB3NVnNdR42b_TjelZSsEZbgArZdWZ9r5_gmw)

---

#### Running Docker container with MySQL
```
docker run -d -e MYSQL_ROOT_PASSWORD=abcd1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=user1234 -e MYSQL_DATABASE=containerdb -p 3306:3306 --name mysql mysql:5.7.20
```
<br>

#### Troubleshooting MongoDB (using with lynda.com tutorials)
If MongoDB is already running when first setting up you'll get a an error syaing the port is already in use. If you need to stop the previous mongodb type:
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

<br>

**NEXT STEPS (if practical for Rugby Project context)**

* Consider having database ID's with more meaningful readability.
* use Foreign Keys to establish relationships between tables in the database.

<br>
<br>
