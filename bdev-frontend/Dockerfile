FROM node:10.15.3


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./package.json

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
