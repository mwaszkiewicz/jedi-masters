#!/bin/bash
echo "BUILDING DOCKER JEDI PRODUCER"
docker build -t jedi-masters-producer .
echo "LAUNCHING DOCKER JEDI PRODUCER"
docker run -itd -p 3002:3002 --name jedi-producer jedi-masters-producer
