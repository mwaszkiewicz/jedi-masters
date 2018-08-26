FROM node:8.11.4-alpine

WORKDIR /jedi-masters-consumer
COPY package*.json ./

RUN npm install

COPY . .

ENV AMQP_URL=amqp://guest:guest@localhost:5672

EXPOSE 3001

CMD ["npm", "start"]