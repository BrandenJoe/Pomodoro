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


    timerMilliseconds.innerHTML = milliText
    timerSeconds.innerHTML = secondsText
    cancelId = requestAnimationFrame(updateTimer);
}