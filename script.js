// code for progress indicator and timer
var min = 1;
var time = min * 60;   
time -= 1;
var x = 1;
var returnId = -1;

var semicircles = document.querySelectorAll('.semi-circle');
var timerText = document.getElementById('timer-text');
var timerButton = document.getElementById('timer-btn');

timerText.innerHTML = min < 10 ? '0'+ min +':00' : min +':00';

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

            //semicircles[0].style.display = 'none';
            //semicircles[1].style.display = 'none';
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

    // displays the set time
    min = 25;
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

    // displays the set time
    min = 5;
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

    // displays the set time
    min = 15;
    setTimer(min);

    // stops any running timer
    stopTimer();
}

function setTimer(min) {
    time = min * 60;   
    time -= 1;
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
    
    // change opacity of logo and settings icon
    logo.style.opacity = '0.5'; 
    settingsIcon.style.opacity = '0.25';  
    
    // change opacity of settings icon on hover
    settingsIcon.addEventListener('mouseenter', () => settingsIcon.style.opacity = '0.25');
    settingsIcon.addEventListener('mouseleave', () => settingsIcon.style.opacity = '0.25');
}

function closeSettings() {
    // collapse settings box
    settingsBox.style.top = '35px'; 
    
    // restore opacity of logo and settings icon 
    logo.style.opacity = '1';
    settingsIcon.style.opacity = '0.5';  
    
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
