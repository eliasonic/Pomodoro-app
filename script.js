// code for toggle button
var toggleButton = document.getElementById('btn');
var button = document.querySelectorAll('.panel button');
button[0].addEventListener('click', pomodoro);
button[1].addEventListener('click', shortBreak);
button[2].addEventListener('click', longBreak);

button[0].classList.add('text-color');

function pomodoro() {
    // toggle button
    toggleButton.style.left = '7px';    
    // change button text color
    button[0].classList.add('text-color');
    button[1].classList.remove('text-color');
    button[2].classList.remove('text-color');
}

function shortBreak() {
    // toggle button
    toggleButton.style.left = '127px';    
    // change button text color
    button[0].classList.remove('text-color');
    button[1].classList.add('text-color');
    button[2].classList.remove('text-color');
}

function longBreak() {
    // toggle button
    toggleButton.style.left = '247px';    
    // change button text color
    button[0].classList.remove('text-color');
    button[1].classList.remove('text-color');
    button[2].classList.add('text-color');
}