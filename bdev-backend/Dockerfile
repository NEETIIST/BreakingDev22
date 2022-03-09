FROM node:10.15.3

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json* ./

RUN npm install
RUN npm install -g nodemon

EXPOSE 3000 4000
CMD [ "nodemon", "server" ]
