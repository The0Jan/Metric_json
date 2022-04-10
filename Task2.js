var metric = require('./Metric.js')

const port = 9100
var express = require('express')
var app = express()
app.use(express.json())


//app.post('/', function(req, res){
//    console.log(req.body);
//    res.send(req.body);
//})

app.post('/', function(req, res){
    var calculated_metric = metric.calculate_metric(req.body);
    metric.save_json(calculated_metric);
    res.send(calculated_metric);
})

app.listen(port, function() {
    console.log('listening on port '+ port)
})