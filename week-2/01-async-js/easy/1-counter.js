//setInterval returns an interval id that can be used to stop the interval using clearInterval(id).
function callback(){
    a++;
    console.clear();
    console.log(a);

    if(a==x){
        clearInterval(intervalid);
    }
}


const readline = require('readline-sync')
let x = Number(readline.question("Enter the time in seconds you want to run the counter: "));
let a = 0;


let intervalid = setInterval(callback,1000);