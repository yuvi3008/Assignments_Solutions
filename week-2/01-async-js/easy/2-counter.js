const readline = require('readline-sync');
let n = readline.question("Enter the count of timer in seconds: ");

let i=0;

function counter(){
    setTimeout(()=>{
        console.log(i);
        if(i==n){
            stop();
        }
        else{
        counter();
        i++;
        } 
    },1000);
}

function stop(){
    console.log("Timer stopped");
}

counter();
