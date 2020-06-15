FROM node:12-buster

RUN mkdir /app
WORKDIR /app

RUN npm install -g @nestjs/cli