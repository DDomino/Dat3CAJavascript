//This is the hour pointer
const hourPointer = document.querySelector("#hour");
//This isthe minute pointer pointer
const minutePointer = document.querySelector("#minute");
//This is the second pointer
const secondPointer = document.querySelector("#second");


var date = new Date(); //Create new date()
console.log(date); //Log the date in the console
let hr = date.getHours(); //Create variable hr and set it's value to the dates hours
let min = date.getMinutes(); //Create variable min and set it's value to the dates minutes
let sec = date.getSeconds(); //Create variable sec and set it's value to the dates seconds
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec); //Print out the hour, minute and second in the console

//Define the hour, minute and seconds position (time)
let hrPosition = (hr*360/12)+(min*(360/60)/12); //(360 / 60) / 12 hours 
let minPosition = (min*360/60)+(sec*(360/60)/60);//(360/ 60) / 60 minutes 
let secPosition = sec*360/60; //(360 / 60) / 60 seconds 

//This function runs the clock
function runTheClock() {
    //How fast the pointers rotate
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    //Set the pointers style to rotate
    hourPointer.style.transform = "rotate(" + hrPosition + "deg)";
    minutePointer.style.transform = "rotate(" + minPosition + "deg)";
    secondPointer.style.transform = "rotate(" + secPosition + "deg)";

}

//Start the clock with 1000 miliseconds interval
var interval = setInterval(runTheClock, 1000);