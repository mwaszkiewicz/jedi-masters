# jedi-masters

This is a Jedi Masters application which allow order new parts. App uses Node v8, Express, Sequelize and Postgres for data storage and RabbitMq as message broker. App contains two services. First service jedi-producer with one endpoint(POST api/v1/orders) and the second service contain endpoint (GET /api/v1/orders) which return list of all orders from database. 


# Quickstart
Clone this repo: git clone https://github.com/mwaszkiewicz/jedi-masters.git
Make sure Docker is running
Run runDockerCompose.sh to build and run Postgres and RabbitMq in docker containers.
Run jedi-masters-consumer\Build.sh script for starting consumer service.
Run jedi-masters-consumer\src\createDb.sh for create database and run first migration.
Run jedi-masters-producer\Build.sh script for starting producer service.

Check that the containers are running by typing docker ps and then you can use http://localhost:3002/ as producer and http://localhost:3001/ as consumer services.
