FROM node:12-alpine

WORKDIR /app

ADD package*.json ./

RUN npm i

RUN npm build

