#!/bin/bash
echo "BUILDING DOCKER JEDI CONSUMER"
docker build -t jedi-masters-consumer .
echo "LAUNCHING DOCKER JEDI CONSUMER"
docker run -itd -p 3001:3001 --name jedi-consumer jedi-masters-consumer
