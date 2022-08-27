/* Time */
var hours = 0;
var minutes = 0;
var seconds = 0;

/* Interval container */
var interval;

/* DOC element */
var stopWatch = document.getElementById("stopwatch");

function Start() {
    if(interval)
    {
        alert("Stopwatch already started");
        return;
    }
    interval = setInterval(() => {
        if(minutes == 59)
        {
            hours++;
            minutes = 0;
        }
        else if(seconds == 59)
        {
            minutes++;
            seconds = 0;
        }
        else 
            seconds++;

        stopWatch.innerHTML = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }, 1000);
}

function Stop() {
    clearInterval(interval);
    interval = null;
}

function Reset() {
    clearInterval(interval);
    interval = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    stopWatch.innerHTML = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);  
}
