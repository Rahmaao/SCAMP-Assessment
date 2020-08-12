const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
term1 = 0;
term2 = 1;
rl.question("How many numbers of terms should be displayed?", function(nterms)
{  
console.log(term1 +","+"\n"+term2+",");
var c = 2;
while(c < nterms)
{
 	var fib = term1+term2;
    term1 = term2;
    term2 = fib;
    console.log(fib+",");
    c++;
}
});
