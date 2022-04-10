var CryptoJS = require("crypto-js")

module.exports = {
    get_json: function(file_name){
        return require(file_name);
    },

    calculate_metric: function(data){
        var added_signature = "";
        for (var instance in data['data']){
            added_signature += data['data'][instance]['signature'];
        }
        const total_items = String(data['data'].length);
        const hashed_signature = CryptoJS.SHA256(added_signature);
        return {
            'metric': {
            'signature': hashed_signature.toString(CryptoJS.enc.Hex) ,
            'number-of-items': total_items     
        }};
    },

    save_json: function(data){
        const fs = require('fs');
        fs.writeFile("results.json", JSON.stringify(data), (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n")
              console.log("The written file has the following contents:")
              console.log(fs.readFileSync("results.json", "utf8"))
            }});
    },
};