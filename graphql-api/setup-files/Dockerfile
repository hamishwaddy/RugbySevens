FROM node:7-alpine

RUN npm i express express-graphql graphql

COPY ./ /app

WORKDIR /app
CMD node server.js