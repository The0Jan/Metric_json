var metric = require('./Metric.js')

// Take file input from the user. Count new metric. Saves new data as results.json.
function main(){
    const input = process.argv[2]
    let json = metric.get_json(input)
    let final = metric.calculate_metric(json)
    metric.save_json(final)
}

main()