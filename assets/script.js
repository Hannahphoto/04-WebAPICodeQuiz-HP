var startquizBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("timer");
var clearEl = document.querySelector("#clear");
var questionEl = document.querySelector("#questiontitle");
var questionIndex = 0;

const myQuestions = [
    {
        question: "Commonly used data types DO NOT include: ",
        answers: ["#1 Strings", 
                  "#2 Booleans", 
                  "#3 Alerts", 
                  "#4 Numbers"],
        correctAnswer: "#3 Alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed withing ____.",
        answers: ["#1 Quotes", 
                  "#2 Curly Brackets", 
                  "#3 Parantheses", 
                  "#4 Square Brackets"],
        correctAnswer: "#3 Paranthesis",
    },
   {
        question: "Arrays in JavaScript can be used to store_________.",
        answers: ["#1 Numbers & Strings", 
                  "#2 Other arrays", 
                  "#3 Booleans", 
                  "#4 All of the above"],
        correctAnswer: "#4 All of the above",
    },
    {   
        question: "An object is surrounded by  ____.",
        answers: ["#1 Quotes", 
                  "#2 Curly Brackets", 
                  "#3 Parantheses", 
                  "#4 Square Brackets"],
        correctAnswer: "#2 Curly Brackets",
    },
   {
        question: "An eventListener method is based off of ____.",
        answers: ["#1 Site", 
                  "#2 Touch", 
                  "#3 Talking", 
                  "#4 Click"],
        correctAnswer: "#4 Click",
    },
    {    
        question: "Arrays work best with what type of conditional statement?",
        answers: ["#1 if/else", 
                  "#2 for", 
                  "#3 Let", 
                  "#4 When"],
        correctAnswer: "#2 for",
    },
    ];


function clear (){
    document.querySelector(".container").innerHTML= " ";
}

function runTimer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function (){
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft; 
    if(timeLeft <=0){
        clearInterval(timeInterval)
    }
}, 1000);
}

function quiz (){
    var q = document.createElement("p");   
    q.textContent = myQuestions[questionIndex].question;
    questionEl.appendChild(q);
    var ul = document.createElement("ul");
    questionEl.appendChild(ul);
    // ul.appendChild(buttonEl);

    // ans.textContent = myQuestions[0].answers;
    for(i=0; i < myQuestions[questionIndex].answers.length; i++){
        var buttonEl = document.createElement("button");
        ul.appendChild(buttonEl);
        buttonEl.textContent = myQuestions[questionIndex].answers[i];
        questionEl.appendChild(buttonEl);
            // for(ans.matches(buttonEl)){
            //     answers[i] + buttonEl;
            }
        //  array.forEach(ul => {
        //     appendChild(buttonEl);
        //  });
       }
            
        
// //WHEN I click the start button
// THEN a timer starts and I am presented with a question
function startquiz(){
    clear();
    runTimer();
    quiz(); 
}

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

function checkanswer(event){
    var clickChoice = event.target;
    if(clickChoice.value !== myQuestions[questionIndex].correctAnswer){
        time -= 10;
    if(time < 0){
        time = 0;
    }
        timerEl.textContent = time; 
        console.log("incorrect"); // replace later
    }
    else{
        console.log("Correct!")
    }
    questionIndex++;  //  to next question

    if(time <= 0 || questionIndex === myQuestions.length){
        // call quizEnd function.
    }
    else{
        quiz();
    }

    }
    

startquizBtn.addEventListener("click", startquiz);

// WHEN the game is over
// THEN I can save my initials and my score 










