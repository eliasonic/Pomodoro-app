var min = document.getElementById('pd').innerHTML;
var time = min * 60;   
time -= 1;
var x = 1;
var returnId = -1;

const bell = document.querySelector('audio');
var timerButton = document.getElementById('timer-btn');
var timerText = document.getElementById('timer-text');
timerText.innerHTML = min < 10 ? '0'+ min +':00' : min +':00';


/* Progress Indicator */
const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

let setProgress = (percent) => {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

/* Timer */
function runTimer() {
    function timerFunc() {
        
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        timerText.innerHTML = `${minutes}:${seconds}`;

        
        //if (time % 60 == 0) {    // for indicator to update every minute
            
            percent = Math.ceil(x * 100 / (time + x));
            setProgress(percent);

        //}

        time--;  // remaining time
        x++;     // elapsed time

        // restart timer
        if (time < 0) {
            bell.play( );
            timerButton.innerHTML = 'restart';
            clearInterval(returnId);

            returnId = -1;
            time = min * 60;
            time -= 1;
            x = 1;
        }
    }

    // start timer
    if (returnId == -1) {
        timerButton.innerHTML = 'pause';
        returnId = setInterval(timerFunc, 1000);
    }
    
    // pause timer
    else {
        timerButton.innerHTML = 'start';
        clearInterval(returnId);
        returnId = -1;
    }
}

timerButton.addEventListener('click', runTimer);


/* code for toggle button */
var toggleButton = document.getElementById('btn');
var button = document.querySelectorAll('.panel button');
button[0].addEventListener('click', pomodoro);
button[1].addEventListener('click', shortBreak);
button[2].addEventListener('click', longBreak);

button[0].classList.add('text-color');

function pomodoro() {
    // toggles button
    toggleButton.style.left = '7px';  

    // changes button text color
    button[0].classList.add('text-color');
    button[1].classList.remove('text-color');
    button[2].classList.remove('text-color');

    // reset progress indicator
    setProgress(0);

    // displays the set time
    min = setPomodoro.innerHTML;
    setTimer(min);

    // stops any running timer
    stopTimer();
}

function shortBreak() {
    // toggles button
    toggleButton.style.left = '127px';  

    // changes button text color
    button[0].classList.remove('text-color');
    button[1].classList.add('text-color');
    button[2].classList.remove('text-color');

    // reset progress indicator
    setProgress(0);

    // displays the set time
    min = setShortbreak.innerHTML;
    setTimer(min);

    // stops any running timer
    stopTimer();
}

function longBreak() {
    // toggles button
    toggleButton.style.left = '247px'; 

    // changes button text color
    button[0].classList.remove('text-color');
    button[1].classList.remove('text-color');
    button[2].classList.add('text-color');

    // reset progress indicator
    setProgress(0);

    // displays the set time
    min = setLongbreak.innerHTML;
    setTimer(min);

    // stops any running timer
    stopTimer();
}

function setTimer(min) {
    time = min * 60;   
    time -= 1;
    x = 1;
    timerText.innerHTML = min < 10 ? '0'+ min +':00' : min +':00';
    timerButton.innerHTML = 'start';
}

function stopTimer() {
    if (returnId !== -1) {
        clearInterval(returnId);
        returnId = -1;
    }
}


/* code to open and close Settings menu */
var settingsBox = document.querySelector('.settings-box'); 
var settingsIcon = document.querySelector('.settings-icon svg');
var logo = document.querySelector('.logo svg');

function openSettings() {
    // open settings box 
    settingsBox.style.display = 'block';   
    
    // change opacity of logo, togglebutton and settings icon
    logo.style.opacity = '0.5'; 
    toggleButton.style.opacity = 0.5;
    settingsIcon.style.opacity = '0.25';  
    
    // change opacity of settings icon on hover
    settingsIcon.addEventListener('mouseenter', () => settingsIcon.style.opacity = '0.25');
    settingsIcon.addEventListener('mouseleave', () => settingsIcon.style.opacity = '0.25');
}

function closeSettings() {
    // close settings box 
    settingsBox.style.display = 'none'; 
    
    // restore opacity of logo, togglebutton and settings icon 
    logo.style.opacity = '1';
    toggleButton.style.opacity = 1;
    settingsIcon.style.opacity = '0.5';  
    
    // restore opacity of settings icon on hover
    settingsIcon.addEventListener('mouseenter', () => settingsIcon.style.opacity = '1');
    settingsIcon.addEventListener('mouseleave', () => settingsIcon.style.opacity = '0.5');
}


/* Code for icon arrows hover state */
var arrows = document.querySelectorAll('.arrows img');
arrows[0].addEventListener('mouseenter', () => arrows[0].src = 'assets/icon-arrow-up-hover.svg');
arrows[0].addEventListener('mouseleave', () => arrows[0].src = 'assets/icon-arrow-up.svg');
arrows[1].addEventListener('mouseenter', () => arrows[1].src = 'assets/icon-arrow-down-hover.svg');
arrows[1].addEventListener('mouseleave', () => arrows[1].src = 'assets/icon-arrow-down.svg');

//shortbreak arrows 
var arrows2 = document.querySelectorAll('.arrows2 img');
arrows2[0].addEventListener('mouseenter', () => arrows2[0].src = 'assets/icon-arrow-up-hover.svg');
arrows2[0].addEventListener('mouseleave', () => arrows2[0].src = 'assets/icon-arrow-up.svg');
arrows2[1].addEventListener('mouseenter', () => arrows2[1].src = 'assets/icon-arrow-down-hover.svg');
arrows2[1].addEventListener('mouseleave', () => arrows2[1].src = 'assets/icon-arrow-down.svg');

// longbreak arrows 
var arrows3 = document.querySelectorAll('.arrows3 img');
arrows3[0].addEventListener('mouseenter', () => arrows3[0].src = 'assets/icon-arrow-up-hover.svg');
arrows3[0].addEventListener('mouseleave', () => arrows3[0].src = 'assets/icon-arrow-up.svg');
arrows3[1].addEventListener('mouseenter', () => arrows3[1].src = 'assets/icon-arrow-down-hover.svg');
arrows3[1].addEventListener('mouseleave', () => arrows3[1].src = 'assets/icon-arrow-down.svg');


/* Code for setting timer */
var setPomodoro = document.getElementById('pd');
var setShortbreak = document.getElementById('sb');
var setLongbreak = document.getElementById('lb');

function increment(setTimer) {
    setTimer.innerHTML++;
}

function decrement(setTimer) {
    if (setTimer.innerHTML > 1) {
        setTimer.innerHTML--;
    }
}

/* Code for selecting color */
let color = document.querySelectorAll('.color');

let doneIcon = document.createElement('img');
doneIcon.src = 'assets/icons8-done-24.png';
doneIcon.alt = '';
doneIcon.style.width = '18px';
color[0].appendChild(doneIcon);

color[0].addEventListener('click', selectColor);
color[1].addEventListener('click', selectColor);
color[2].addEventListener('click', selectColor);

function selectColor(event) {
    color[0].innerHTML = '';
    color[1].innerHTML = '';
    color[2].innerHTML = '';
    event.target.appendChild(doneIcon);
}

/* Code for selecting font */
let font = document.getElementsByClassName('font');
font[0].onclick = selectFont;
font[1].onclick = selectFont;
font[2].onclick = selectFont;

function selectFont(event) {
    font[0].classList.remove('select-font');
    font[1].classList.remove('select-font');
    font[2].classList.remove('select-font');
    event.target.classList.add('select-font');
}


/* Code for applying settings */
function applySettings() {
    // apply timer settings
    applyTimer();
    
    // apply font settings
    applyFont();

    // apply color settings
    applyColor();

    // close settings on apply
    closeSettings();
}

function applyTimer() {
    if (toggleButton.style.left === '7px') {
        pomodoro();
    }
    else if (toggleButton.style.left === '127px') {
        shortBreak();
    }
    else if (toggleButton.style.left === '247px') {
        longBreak();
    }
}

function applyFont() {
    let container = document.querySelector('.container');

    if (font[0].className.includes('select-font')) {
        container.style.fontFamily = "'Kumbh Sans', sans-serif";  
        timerText.style.fontWeight = '700'; 
    }
    else if (font[1].className.includes('select-font')) {
        container.style.fontFamily = "'Roboto Slab', serif";
        timerText.style.fontWeight = '700';
    }
    else if (font[2].className.includes('select-font')) {
        container.style.fontFamily = "'Space Mono', monospace";
        timerText.style.fontWeight = '400';
    }
}

function applyColor() {
    let applyButton = document.querySelector('.apply');

    if (color[0].firstChild === doneIcon) {
        circle.style.stroke = 'var(--default)';                   // progress indicator    
        toggleButton.style.backgroundColor = 'var(--default)';    // toggle button
        applyButton.style.backgroundColor = 'var(--default)';     // apply button
        timerButton.onmouseover = () => timerButton.style.color = 'var(--default)';   // timer button hover
        timerButton.onmouseout = () => timerButton.style.color = 'var(--timer)';
    }

    else if (color[1].firstChild === doneIcon) {
        circle.style.stroke = 'var(--option2)';
        toggleButton.style.backgroundColor = 'var(--option2)';
        applyButton.style.backgroundColor = 'var(--option2)';
        timerButton.onmouseover = () => timerButton.style.color = 'var(--option2)';   
        timerButton.onmouseout = () => timerButton.style.color = 'var(--timer)';
    }

    else if (color[2].firstChild === doneIcon) {
        circle.style.stroke = 'var(--option3)';
        toggleButton.style.backgroundColor = 'var(--option3)';
        applyButton.style.backgroundColor = 'var(--option3)';
        timerButton.onmouseover = () => timerButton.style.color = 'var(--option3)';   
        timerButton.onmouseout = () => timerButton.style.color = 'var(--timer)';
    }
}

/* apply button clicking effect */
let applyButton = document.querySelector('.apply');
applyButton.addEventListener('mousedown', () => applyButton.style.transform = 'scale(0.95)');
applyButton.addEventListener('mouseup', () => applyButton.style.transform = 'scale(1)');