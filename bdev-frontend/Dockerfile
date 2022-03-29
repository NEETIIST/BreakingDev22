FROM node:10.15.3

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install && mv /usr/src/app/node_modules /node_modules && npm cache clean --force

COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
