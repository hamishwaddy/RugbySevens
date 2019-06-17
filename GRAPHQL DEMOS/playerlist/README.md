### Docker command
Run this command to create container called 'mysql' that contains rugby7test db
```
docker run --name mysql -p 3306:3306 -e MYSQL_USER=user -e MYSQL_PASSWORD=user1234 -e MYSQL_ROOT_PASSWORD=1234abcd -d mysql:5.7.26
```

### To start server...
Type into Terminal ```nodemon server.js```