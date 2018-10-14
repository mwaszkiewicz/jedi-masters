FROM node:8.11.3-alpine

RUN mkdir /app
ADD . /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm run migrateDb"]