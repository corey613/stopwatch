let hours = 0
let minutes = 0;
let seconds = 0; 
let milliseconds = 0;


let displayHours = 0
let displayMinutes = 0;
let displaySeconds = 0; 
let displayMilliseconds = 0;

let interval = null;
let timerStatus = "stopped"

var start = document.getElementById("start");
var resetTimer = document.getElementById("reset");
var timerText = document.getElementById("timer");


function stopWatch(){
    milliseconds++

    if(milliseconds/ 100 === 1){
        seconds++
        milliseconds= 0;

    }

    if(seconds/ 60 === 1){
        minutes++
        seconds= 0;
    }

    if(minutes/ 60 === 1){
        hours++
        minutes= 0;
    }

    if(milliseconds< 10){
        displayMilliseconds = "0" + milliseconds.toString();
    } else {
        displayMilliseconds = milliseconds;
    }


    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }


    if(minutes == 0){
        displayMinutes = "00";
    } else if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if(hours == 0){
        displayHours = "00";
    }else if(hours < 10){
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }


    timerText.innerText = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMilliseconds;

}

function timer(){
    if(timerStatus === "stopped"){
       interval =  window.setInterval(stopWatch, 10); 
       start.innerHTML = "Stop";
       timerStatus = "started"


    } else {
        window.clearInterval(interval);
        start.innerHTML = "Start";
        timerStatus = "stopped"
    }
}

start.addEventListener("click", timer);


function reset(){
    window.clearInterval(interval);

        hours = 0
        minutes = 0;
        seconds = 0; 
        milliseconds = 0;

        timerText.innerText = "00:00:00:00";
        start.innerHTML = "Start";
}


resetTimer.addEventListener("click", reset);


