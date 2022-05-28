FROM node:16.14.2

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install  && mv /usr/src/app/node_modules /node_modules && npm cache clean --force

COPY . /usr/src/app

EXPOSE 3000 4000
CMD [ "nodemon", "server" ]
