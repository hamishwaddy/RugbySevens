1. Set ENV

Create a `.env` file and paste the following code into it

```
DB_HOST=localhost
DB_USER=user
DB_PASS=user1234
DB_NAME=containerdb
```

Then run `source .env`

2. Setup Database

```
docker run -d -e MYSQL_ROOT_PASSWORD=abcd1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=user1234 -e MYSQL_DATABASE=containerdb -p 3306:3306 -v $PWD/sql/:/data --name mysql mysql:5.7.20
```

3. Setup Database table structure
```
docker exec -it mysql bash -c "mysql -u user -puser1234 < data/rugby7.sql"
```

4. NPM Install

```
npm install
```

5. Setup Database table data
```
node ./sequelize/data/insertData
```

6. Start Application

```
npm start
```