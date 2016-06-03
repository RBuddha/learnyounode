 
var total = 0;
for(var i=2; i<process.argv.length; i++){
    
    var number = Number(process.argv[i]);
    total = total + number;
    }
console.log(total);


//   Write a program that accepts one or more numbers as command-line arguments  
//   and prints the sum of those numbers to the console (stdout). 