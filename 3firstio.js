var fs = require('fs') 

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
str.split('\n');
var count = 0;
for(var i=0; i<str.length; i++){
    if(str[i] === "\n"){
        count+=1;
    }
}
console.log(count);


//   Write a program that uses a single synchronous filesystem operation to  
//   read a file and print the number of newlines (\n) it contains to the  
//   console (stdout), similar to running cat file | wc -l.