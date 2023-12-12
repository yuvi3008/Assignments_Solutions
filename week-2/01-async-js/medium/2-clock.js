
function showClock(){
//Date objects needs to be called everytime to show the date.
console.clear();
const date = new Date();

// Showing the date and time in 24 hours formfat.

let current_hours = date.getHours();
let current_minute = date.getMinutes();
let current_seconds = date.getSeconds();
let am = false;



//Logic to add zero for the single digit numbers.

if(current_minute<10){
    current_minute = '0'+current_minute;
}
if(current_seconds<10){
    current_seconds = '0'+current_seconds;
}


console.log(current_hours+":"+current_minute+":"+current_seconds);
//Showing the date and time in 12 hour format.

if(current_hours<12){
    am = true;
    if(current_hours<10){
        current_hours = '0'+current_hours;
    }
}else{
    current_hours = current_hours%12;
    if(current_hours<10){
        current_hours = '0'+current_hours;
    }

}

if(!am){
    console.log(current_hours +":"+current_minute+":"+current_seconds+" PM");
}else{
    console.log(current_hours+":"+current_minute+":"+current_seconds+" AM");
}


}

setInterval(showClock,1000);