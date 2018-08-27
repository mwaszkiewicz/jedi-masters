#!/bin/bash
echo "START"

docker-compose up

sh ./jedi-master-consumer/build.sh