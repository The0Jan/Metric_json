var metric = require('./Metric.js')

//Minimalistic server on localhost:9000
const port = 9000
var express = require('express')
var app = express()
app.use(express.json())

app.post('/', function(req, res){
    var calculated_metric = metric.calculate_metric(req.body)
    metric.save_json(calculated_metric)
    res.send(calculated_metric)
})

app.listen(port, function() {
    console.log('listening on port '+ port)
})