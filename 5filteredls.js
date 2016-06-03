var fs = require('fs') 
var path = require('path');

var dir = process.argv[2];
var extension =  "." + process.argv[3];


fs.readdir(dir, function(err, list){
    list.forEach(function(file){
        if(path.extname(file)==extension){
            console.log(file);
        }
    })
});

//   Write a program that uses a single asynchronous filesystem operation to  
//   read a file and print the number of newlines it contains to the console  
//   (stdout), similar to running cat file | wc -l.  