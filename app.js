const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');
const startButton = document.querySelector('.stopwatch__start');
const stopButton = document.querySelector('.stopwatch__stop');
const resetButton = document.querySelector('.stopwatch__reset');

let startTime;
let cancelId;
let saveTime = 0;
const countdown = 25 * 60 * 1000; // 25 minutes in milliseconds


function startTimer(){
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
startTime = Date.now();
cancelId = requestAnimationFrame(updateTimer);
}
function stopTimer(){
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    saveTime += Date.now() - startTime ;
cancelAnimationFrame(cancelId);
}

function resetTimer(){
    startTime = Date.now();
    saveTime = 0;
    timerMilliseconds.innerHTML = "000"
    timerSeconds.innerHTML = "00"
    timerMinutes.innerHTML = "25"
}

function updateTimer(){
    let millielapsed = Date.now() - startTime + saveTime;

    let millisLeft = countdown - millielapsed;

    if (millisLeft <= 0){
        millisLeft = 0;
        cancelAnimationFrame(cancelId);
        cancelId = null;
    }

    let timeleft = countdown - millielapsed;
    let secondleft = timeleft / 1000;
    let minutesLeft = secondleft / 60;

    let milliText = timeleft % 1000;
    let secondsText = Math.floor(secondleft) % 60;
    let minutesText = Math.floor(minutesLeft);

    if (minutesText.toString().length < 2){
        minutesText = minutesText.toString().padStart(2, '0');
    }
    if (secondsText.toString().length < 2){
        secondsText = secondsText.toString().padStart(2, '0');
    }
    if (milliText.toString().length < 3){
        milliText = milliText.toString().padStart(3, '0');
    }


    timerMilliseconds.innerHTML = milliText
    timerSeconds.innerHTML = secondsText
    timerMinutes.innerHTML = minutesText

    if (cancelId){
        cancelId = requestAnimationFrame(updateTimer);
    }
}