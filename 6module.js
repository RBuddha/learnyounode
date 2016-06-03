module.exports = function(dir, extension, callback) {
    var fs = require('fs');
    var path = require('path');

    var results = [];
    extension = "." + extension;
    fs.readdir(dir, function(err, data) {
    if (err) {
        return callback(err);
        }
    else {
        for(var i in data) {
       
        if (path.extname(data[i]) === extension)
            results.push(data[i]);
        }
        callback(null, results);
        }
    });
}