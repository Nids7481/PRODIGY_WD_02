let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let lapCounter = 1;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const lapList = document.getElementById("lap-list");

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const lapBtn = document.getElementById("lap-btn");

function startTimer() {
    interval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCounter = 1;
    updateDisplay();
    clearLapList();
}

function lapTimer() {
    const lapTime = {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    };
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCounter}: ${formatTime(lapTime)}`;
    lapList.appendChild(lapItem);
    lapCounter++;
}

function clearLapList() {
    lapList.innerHTML = "";
}

function formatTime(time) {
    return (
        String(time.hours).padStart(2, "0") + ":" +
        String(time.minutes).padStart(2, "0") + ":" +
        String(time.seconds).padStart(2, "0") + ":" +
        String(time.milliseconds).padStart(3, "0")
    );
}

function updateDisplay() {
    hoursDisplay.textContent = String(hours).padStart(2, "0");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
    millisecondsDisplay.textContent = String(milliseconds).padStart(3, "0");
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapTimer);
