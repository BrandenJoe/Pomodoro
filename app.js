const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');


let startTime;
let cancelId;
const countdown = 25 * 60 * 1000; // 25 minutes in milliseconds


function startTimer(){
startTime = Date.now();
cancelId = requestAnimationFrame(updateTimer);
}
function stopTimer(){

}

function resetTimer(){

}

function updateTimer(){
    let millielapsed = Date.now() - startTime;

    let timeleft = countdown - millielapsed;
    let secondleft = timeleft / 1000;
    let minutesLeft = secondleft / 60;

    let milliText = timeleft % 1000;
    let secondsText = Math.floor(secondleft) % 60;
    let minutesText = Math.floor(minutesLeft);

    if (minutesText.toString().length === 1){
        minutesText = minutesText.toString().padStart(2, '0');
    }
    if (secondsText.toString().length === 1){
        secondsText = secondsText.toString().padStart(2, '0');
    }
    if (milliText.toString().length === 1){
        milliText = milliText.toString().padStart(2, '0');
    }


    timerMilliseconds.innerHTML = milliText
    timerSeconds.innerHTML = secondsText
    timerMinutes.innerHTML = minutesText
    cancelId = requestAnimationFrame(updateTimer);
}