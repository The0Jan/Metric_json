# Metric_json

## Task 1 - Metrics counter
A simple metric calculator app/server


node Task1.js <FILE_NAME>
(FILE_NAME - example: ./tc/003_tc.json)
## Task 2 - Simple server 

listening on port 9000 localhost
node Task2.js

## Task 3 - Server on Docker

Listening on port 9100 loclhost
//Building coker image
docker build -t metrics-server .

// Launch bash shell in the container
docker run -it -p 9100:9000 metrics-server

// Launch in detached mode
docker run -d -p 9100:9000 metrics-server

docker ps 