const watchNum = document.getElementById('watch');
const startBtn = document.querySelector('.startBtn');
const resetBtn = document.querySelector('.resetBtn');
const stopBtn = document.querySelector('.stopBtn');
const lapBtn = document.querySelector('.lapBtn');
const lapContainer = document.querySelector('.lap-container');
const lap = document.getElementById('lap');

let counter;
let lapCounter = 0;
let ms
let mSecCounter = 0;
let secCounter = 0;
let minCounter = 0;



startBtn.addEventListener('click', startFunc);
resetBtn.addEventListener('click', resetFunc);
stopBtn.addEventListener('click', stopFunc);
lapBtn.addEventListener('click', lapFunc);


function startFunc() {
    counter = setInterval(upTimerTest, 10);
    startBtn.disabled = true;
}
function resetFunc() {
    clearInterval(counter);
    mSecCounter = 0;
    secCounter = 0;
    minCounter = 0;
    lapCounter = 0;
    startBtn.disabled = false;

    watchNum.textContent = `0${minCounter}:0${secCounter}:0${mSecCounter}`;
    lapContainer.textContent = '';
}
function stopFunc() {
    clearInterval(counter);
    startBtn.disabled = false;
}

function lapFunc() {
    lapCounter++;
    let lapNote = `${lapCounter}. Lap: 0${minCounter}:0${secCounter}:${mSecCounter}`;
    let lapRoom = document.createElement("P");

    lapRoom.append(lapNote);
    lapContainer.append(lapRoom);

}




function upTimerTest() {
    mSecCounter++;
    if (mSecCounter === 99) {
        mSecCounter = 0;
        secCounter++
    }
    if (secCounter === 60) {
        secCounter = 0;
        minCounter++;
    }

    let ms = mSecCounter < 10 ? `0${mSecCounter}` : `${mSecCounter}`;
    let s = secCounter < 10 ? `0${secCounter}` : `${secCounter}`;
    let min = minCounter < 10 ? `0${minCounter}` : `${minCounter}`;

    watchNum.innerHTML = `${min}:${s}:${ms}`;
}

console.log(mSecCounter);
