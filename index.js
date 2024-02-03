//..............settings box logic................

let settings_button = document.getElementById('settings-icon');
let close_button = document.getElementById('close-icon');
let settings_Box = document.getElementById('settings-box');

function showSettingsBox(){
    settings_Box.style.display = "flex";

}

function hideSettingsBox(){
    settings_Box.style.display= 'none';
}

//.........all style and color changes logic..........

// var r= document.querySelector(':root');
// var rProperties = getComputedStyle(r);
// var rValues = rProperties.getPropertyValue('--primary-font-family');   
// r.style.setProperty('--primary-font-family','spaceMonoBold');
// var rValues = rProperties.getPropertyValue('--primary-font-family');


//..............selecting minutes logic..............

var pomodoroMinutes
var longBreakMinutes
var shortBreakMinutes
var seconds

var OutputMinutes = document.getElementById('minutes');
var OutputSeconds = document.getElementById('seconds');

var pomodoroInput = document.getElementById('pomodoro');
var shortBreakInput = document.getElementById('short-break');
var longBreakInput = document.getElementById('long-break');

// var testNumber = 5;
// OutputMinutes.innerHTML = '0' + testNumber;

function ApplyChanges(){
    getMinutes();
    changeFonts();
    changeColor();
    hideSettingsBox();
}


function getMinutes(){
    var pomodoroValue = pomodoroInput.value.trim();
    if(pomodoroValue ===""){
        pomodoroValue = 25;
    }
    if(pomodoroValue <= 9){
        pomodoroMinutes = '0' + pomodoroValue;
        OutputMinutes.innerHTML = pomodoroMinutes;
    }
    if(pomodoroValue >9){
        pomodoroMinutes = pomodoroValue;
        OutputMinutes.innerHTML = pomodoroMinutes;
    }
    if(pomodoroValue > 99){
        pomodoroMinutes = pomodoroValue;
        OutputMinutes.innerHTML = pomodoroMinutes;
    }
    if(pomodoroValue > 1000){
        pomodoroMinutes = "1000";
        OutputMinutes.innerHTML = pomodoroMinutes;
    }

    var shortBreakValue = shortBreakInput.value.trim();
    if(shortBreakValue ===""){
        shortBreakValue = 5;
    }
    if(shortBreakValue <= 9){
        shortBreakMinutes = '0' + shortBreakValue;
        // OutputMinutes.innerHTML = shortBreakMinutes;
    }
    if(shortBreakValue >9){
        shortBreakMinutes = shortBreakValue;
        // OutputMinutes.innerHTML = shortBreakMinutes;
    }
    if(shortBreakValue > 99){
        shortBreakMinutes = shortBreakValue;
        // OutputMinutes.innerHTML = shortBreakMinutes;
    }
    if(shortBreakValue > 1000){
        shortBreakMinutes = "1000";
        // OutputMinutes.innerHTML = shortBreakMinutes;
    }

    var longBreakValue = longBreakInput.value.trim();
    if(longBreakValue ===""){
        longBreakValue = 15;
    }
    if(longBreakValue <= 9){
        longBreakMinutes = '0' + longBreakValue;
        // OutputMinutes.innerHTML = longBreakMinutes;
    }
    if(longBreakValue >9){
        longBreakMinutes = longBreakValue;
        // OutputMinutes.innerHTML = longBreakMinutes;
    }
    if(longBreakValue > 99){
        longBreakMinutes = longBreakValue;
        // OutputMinutes.innerHTML = longBreakMinutes;
    }
    if(longBreakValue > 1000){
        longBreakMinutes = "1000";
        // OutputMinutes.innerHTML = longBreakMinutes;
    }

    
}

//...................selecting fonts logic..............

var currentFont = "kumbhBold";
var kumbhFont = document.getElementById('kumbh-font');
var robotoFont = document.getElementById('roboto-font');
var spacemonoFont = document.getElementById('spacemono-font');

function chooseKumbh(){
    kumbhFont.classList.add('active-font');
    robotoFont.classList.remove('active-font');
    spacemonoFont.classList.remove('active-font');
    currentFont = "kumbhBold";
    // console.log(currentFont);
}

function chooseRoboto(){
    kumbhFont.classList.remove('active-font');
    robotoFont.classList.add('active-font');
    spacemonoFont.classList.remove('active-font');
    currentFont = "robotoSlabBold";
    // console.log(currentFont);
}

function chooseSpacemono(){
    kumbhFont.classList.remove('active-font');
    robotoFont.classList.remove('active-font');
    spacemonoFont.classList.add('active-font');
    currentFont = "spaceMonoBold";
    // console.log(currentFont);
}



function changeFonts(){
    var r= document.querySelector(':root');   
    r.style.setProperty('--primary-font-family',currentFont);
}

//................selecting colors logic................

var currentColor = "rgba(248, 112, 112, 1)";
var fadedCurrentColor = "rgb(247, 171, 171";
var orangeColor = document.getElementById('orange');
var greenColor = document.getElementById('green');
var purpleColor = document.getElementById('purple');

function chooseOrange(){
    orangeColor.classList.add('active-color');
    greenColor.classList.remove('active-color');
    purpleColor.classList.remove('active-color');
    currentColor = "rgba(248, 112, 112, 1)";
    fadedCurrentColor = "rgb(247, 171, 171";
}

function chooseGreen(){
    orangeColor.classList.remove('active-color');
    greenColor.classList.add('active-color');
    purpleColor.classList.remove('active-color');
    currentColor = "rgba(112, 243, 248, 1)";
    fadedCurrentColor = "rgb(150, 238, 241)";
}

function choosePurple(){
    orangeColor.classList.remove('active-color');
    greenColor.classList.remove('active-color');
    purpleColor.classList.add('active-color');
    currentColor = "rgba(216, 129, 248, 1)";
    fadedCurrentColor = "rgb(235, 180, 255)";
}

function changeColor(){
    var rc= document.querySelector(':root');   
    rc.style.setProperty('--primary-color',currentColor);
    rc.style.setProperty('--faded-primary-color',fadedCurrentColor);
}