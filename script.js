// code for progress indicator and timer
var min = document.getElementById('pd').innerHTML;
var time = min * 60;   
time -= 1;
var x = 1;
var returnId = -1;

var semicircles = document.querySelectorAll('.semi-circle');
var timerText = document.getElementById('timer-text');
var timerButton = document.getElementById('timer-btn');

timerText.innerHTML = min < 10 ? '0'+ min +':00' : min +':00';
semicircles[0].style.transform = 'rotate(360deg)';
semicircles[1].style.transform = 'rotate(180deg)';
semicircles[2].style.display = 'none';

function runTimer() {
    function timerFunc() {
        // timer
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        timerText.innerHTML = `${minutes}:${seconds}`;

        // progress indicator
        //if (time % 60 == 0) {   
            var angle = time * 360 / (time + x);

            if (angle > 180) {
                semicircles[0].style.transform = 'rotate(180deg)';
                semicircles[1].style.transform = `rotate(${angle}deg)`;
                semicircles[2].style.display = 'none';
            }
            else {
                semicircles[0].style.transform = `rotate(${angle}deg)`;
                semicircles[1].style.transform = `rotate(${angle}deg)`;
                semicircles[2].style.display = 'block';
            }
        //}

        time--;  // remaining time
        x++;     // elapsed time

        // restart timer
        if (time < 0) {
            timerButton.innerHTML = 'restart';
            clearInterval(returnId);

            returnId = -1;
            time = min * 60;
            time -= 1;
            x = 1;

            // reset progress indicator
            semicircles[0].style.display = 'none';
            semicircles[1].style.display = 'none';
            semicircles[0].style.transform = 'rotate(360deg)';
            semicircles[1].style.transform = 'rotate(180deg)';
            semicircles[2].style.display = 'none';
        }
    }

    // start timer
    if (returnId == -1) {
        // display progress indicator
        if (semicircles[0].style.display === 'none' && semicircles[1].style.display === 'none') {
            semicircles[0].style.display = 'block';
            semicircles[1].style.display = 'block';    
        } 
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


// code for toggle button
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
    semicircles[0].style.display = 'none';
    semicircles[1].style.display = 'none';
    semicircles[0].style.transform = 'rotate(360deg)';
    semicircles[1].style.transform = 'rotate(180deg)';

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
    semicircles[0].style.display = 'none';
    semicircles[1].style.display = 'none';
    semicircles[0].style.transform = 'rotate(360deg)';
    semicircles[1].style.transform = 'rotate(180deg)';

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
    semicircles[0].style.display = 'none';
    semicircles[1].style.display = 'none';
    semicircles[0].style.transform = 'rotate(360deg)';
    semicircles[1].style.transform = 'rotate(180deg)';

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


// code to open and close Settings menu
var settingsBox = document.querySelector('.settings-box'); 
var settingsIcon = document.querySelector('.settings-icon svg');
var logo = document.querySelector('.logo svg');

function openSettings() {
    // expand settings box 
    settingsBox.style.top = '-497px';   
    
    // change opacity of logo, togglebutton and settings icon
    logo.style.opacity = '0.5'; 
    toggleButton.style.opacity = 0.5;
    settingsIcon.style.opacity = '0.25';  
    
    // change opacity of settings icon on hover
    settingsIcon.addEventListener('mouseenter', () => settingsIcon.style.opacity = '0.25');
    settingsIcon.addEventListener('mouseleave', () => settingsIcon.style.opacity = '0.25');
}

function closeSettings() {
    // collapse settings box
    settingsBox.style.top = '35px'; 
    
    // restore opacity of logo, togglebutton and settings icon 
    logo.style.opacity = '1';
    toggleButton.style.opacity = 1;
    settingsIcon.style.opacity = '0.5';  
    
    // restore opacity of settings icon on hover
    settingsIcon.addEventListener('mouseenter', () => settingsIcon.style.opacity = '1');
    settingsIcon.addEventListener('mouseleave', () => settingsIcon.style.opacity = '0.5');
}


// Code for icon arrows hover state
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


// Code for setting timer
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

// Code for selecting color
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

// Code for selecting font
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


// Code for applying settings
function applySettings() {
    // apply timer settings
    applyTimer();
    
    // apply font settings
    applyFont();

    // apply color settings
    applyColor();
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
    }
    else if (font[1].className.includes('select-font')) {
        container.style.fontFamily = "'Roboto Slab', serif";
    }
    else if (font[2].className.includes('select-font')) {
        container.style.fontFamily = "'Space Mono', monospace";
    }
}

function applyColor() {
    let applyButton = document.querySelector('.apply');

    if (color[0].firstChild === doneIcon) {
        toggleButton.style.backgroundColor = 'var(--default)';    // toggle button
        semicircles[0].style.backgroundColor = 'var(--default)';  // progress indicator 
        semicircles[1].style.backgroundColor = 'var(--default)';   
        applyButton.style.backgroundColor = 'var(--default)';     // apply button
        timerButton.onmouseover = () => timerButton.style.color = 'var(--default)';   // timer button hover
        timerButton.onmouseout = () => timerButton.style.color = 'var(--timer)';
    }

    else if (color[1].firstChild === doneIcon) {
        toggleButton.style.backgroundColor = 'var(--option2)';
        semicircles[0].style.backgroundColor = 'var(--option2)';
        semicircles[1].style.backgroundColor = 'var(--option2)';
        applyButton.style.backgroundColor = 'var(--option2)';
        timerButton.onmouseover = () => timerButton.style.color = 'var(--option2)';   
        timerButton.onmouseout = () => timerButton.style.color = 'var(--timer)';
    }

    else if (color[2].firstChild === doneIcon) {
        toggleButton.style.backgroundColor = 'var(--option3)';
        semicircles[0].style.backgroundColor = 'var(--option3)';
        semicircles[1].style.backgroundColor = 'var(--option3)';
        applyButton.style.backgroundColor = 'var(--option3)';
        timerButton.onmouseover = () => timerButton.style.color = 'var(--option3)';   
        timerButton.onmouseout = () => timerButton.style.color = 'var(--timer)';
    }
}
