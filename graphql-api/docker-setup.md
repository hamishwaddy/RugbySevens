#### Docker Container setup
___

1. Download the graphql-api folder from the Github repository ([here](https://github.com/hamishwaddy/RugbySevens/tree/master/graphql-api)). It has the necessary files to build and run the GraphQL server.

2. Open Terminal, from the graphql-api folder run:
```
docker-compose up -d 
```
3. From the graphql-api, open VS Code.

Server is now running on *localhost:4000/graphql*
___
___

Sidenote: 

To see what’s in a container type in: 
```
docker exec -it ‘nameofcontainer’ sh
```
Once in a container, type the following to see the files inside (node modules are installed in the container so that they are decoupled from the host system)
```
ls -la 
```

