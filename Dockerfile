FROM node:14-buster

RUN mkdir /app
WORKDIR /app

RUN npm install -g @nestjs/cli
