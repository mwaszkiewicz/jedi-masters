#!/bin/bash
echo "CREATE DB"
echo "INSTALL SEQUELIZE CLI"
npm install -g sequelize-cli
sequelize db:create
sequelize db:migrate

read -rsn1
