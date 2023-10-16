var startquizBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("timer");
var clearEl = document.querySelector("#clear");
var q1 = document.createElement("q1");   
var q2 = document.createElement("q2");
var q3 = document.createElement("q3");
var q4 = document.createElement("q4");
var q5 = document.createElement("q5");
var q6 = document.createElement("q6");

// document.querySelector('container').innerHTML = " ";

// //WHEN I click the start button
// THEN a timer starts and I am presented with a question
function generateQuiz() {
    var timeLeft = 60;
    var timeInterval = setInterval(function (){
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft; 
    if(timeLeft <=0){
        clearInterval(timeInterval)
    }
    // if(timeLeft <= 59){
    //     clearInterval(msgInterval);
    // }
}, 1000);
}
// if(generateQuiz === true){
//     clearEl.innerHTML= " ";

// }

function clear (){
    clearEl.document.innerHTML = " ";
}

function quiz (){
    q1.textContent = ["Commonly used data types DO NOT include: ", "#1 Strings", "#2 Booleans", "#3 Alerts", "#4 Numbers"];
    q2.text
}

function startquiz(){
    quiz = generateQuiz(); 
   
}



startquizBtn.addEventListener("click", startquiz)
;
// startquizBtn.addEventListener("click", clear);



// WHEN I answer a question
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and my score 
