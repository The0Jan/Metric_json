# Counting Metrics in JS

A simple metric calculator app/server
## Task 1 - Metrics counter
**Launch app with correct file input**
```
node Task1.js <FILE_NAME>
```
>(example FILE_NAME: ./tc/003_tc.json)
## Task 2 - Simple server 
**Launch simple server**
```
node Task2.js
```
>Server is listening on localhost:9000
## Task 3 - Server on Docker

**Building docker image**
```
docker build -t metrics-server .
```
**Launch docker in detached mode**
```
docker run -d -p 9100:9000 metrics-server
```

**Launch docker image with connected bash shell**
```
docker run -it -p 9100:9000 metrics-server
```
> Server is listening on localhost:9100
