var fs = require('fs') 

var file = process.argv[2];
fs.readFile(file, 'utf8', function(err, data){

    var newlines = data.toString().split('\n');
    console.log(newlines.length-1);
    
});



//   Write a program that uses a single asynchronous filesystem operation to  
//   read a file and print the number of newlines it contains to the console  
//   (stdout), similar to running cat file | wc -l. 