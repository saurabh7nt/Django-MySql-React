FROM node:alpine

WORKDIR /app

COPY package*.json /app

RUN npm installj

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]