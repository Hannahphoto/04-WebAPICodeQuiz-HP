//WHEN I click the start button
// THEN a timer starts and I am presented with a question
// var timer = 60;
var startquizBtn = document.querySelector("#startquiz");

// function startquiz(){
//     timer.textcontent = " ";
//     countdown;

// }
function displayMessage(){
    

}

function countdown (){
    var timeleft = 60;
    var timeInterval = setInterval (function(){
        if(timeleft === 0){
            clearInterval(timeInterval);
            // timer.textcontent = " ";
        }
    timeleft = --;
    timeleft.textcontent = timeleft
    }, 1000);

}

startquizBtn.addEventListener("click", countdown);

// WHEN I answer a question
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and my score 
