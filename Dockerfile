FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install yarn

RUN yarn install

COPY . .

EXPOSE ${APP_PORT}

CMD [ "yarn", "start" ]