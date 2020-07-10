//Stop Watch

var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;

var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');


var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
    else if(min >=60){
        hour++
        hourHeading.innerHTML = hour;
        min = 0;
        minHeading.innerHTML = min;
        
    }
    
}
var startbtn = document.getElementById("start");
var stopbtn = document.getElementById("stop");
function start(){
    interval = setInterval(timer,10);
    startbtn.disabled = true
    stopbtn.disabled = false

}
function stop(){
    clearInterval(interval)
    stopbtn.disabled = true;
    startbtn.disabled = false;
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    hour = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    hourHeading.innerHTML = hour;
    clearInterval(interval)
    startbtn.disabled = false
    stopbtn.disabled = false
}