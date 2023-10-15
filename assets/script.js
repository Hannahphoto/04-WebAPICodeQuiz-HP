// //WHEN I click the start button
// THEN a timer starts and I am presented with a question
var starquizBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("timer");

function generateQuiz() {
var timeLeft = 60;
    var timeInterval = setInterval(function (){
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft;
    if(timeLeft <=0){
        clearInterval(timeInterval)
    }
}, 1000);
}

var quiz = "";

function startquiz(){
    quiz = generateQuiz();
}


starquizBtn.addEventListener("click",startquiz)

// var startquiz = setInterval(function(){
//     var timeInterval
// }    

// startquizBtn.addEventListener("click", startquiz);

// WHEN I answer a question
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and my score 
