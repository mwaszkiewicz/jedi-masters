FROM node:8.11.4-alpine

WORKDIR /jedi-masters-producer
COPY package*.json ./

RUN npm install

COPY . .

ENV AMQP_URL=amqp://guest:guest@172.21.0.3:5672

RUN npm install

EXPOSE 3002

CMD ["npm", "start"]