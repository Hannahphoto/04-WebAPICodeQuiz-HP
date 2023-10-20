var startquizBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("timer");
var clearEl = document.querySelector("#clear");
var questionEl = document.querySelector("#questiontitle");
var highScoreEl = document.querySelector("#highscore");
var container = document.querySelector(".container");
var sectionHome = document.getElementById("#home");
// var saveInitials = document.querySelector("saveInitials");
var timeLeft = 60;
var timeInterval ;
var inputScore= [];
var inputInitial= [];
var questionIndex = 0;
var scorePageIndex = 0;
var score = [];

const highScorePage = [
    {
        h2: "Highsores:",
        goBackClear: [
            "Go Back",
            "Clear Score"], 
    },
];

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
        question: "The condition in an IF/ELSE statement is enclosed within ____.",
        answers: ["#1 Quotes", 
                  "#2 Curly Brackets", 
                  "#3 Parenthesis", 
                  "#4 Square Brackets"],
        correctAnswer: "#3 Parenthesis",
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
                  "#3 Parentheses", 
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



function runTimer(){
    timeInterval = setInterval(function (){
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft; 
    if(timeLeft <=0){
        clearInterval(timeInterval)
        questionEl.innerHTML = " ";
        endQuiz();
    }
}, 1000);
}


// WHEN I answer a question
// THEN I am presented with another question

function quiz (){
    var q = document.createElement("p");   
    q.textContent = myQuestions[questionIndex].question;
    questionEl.appendChild(q);
    var ul = document.createElement("ul");
    questionEl.appendChild(ul);

    for(i=0; i < myQuestions[questionIndex].answers.length; i++){
        var buttonEl = document.createElement("button");
        ul.appendChild(buttonEl);
        buttonEl.textContent = myQuestions[questionIndex].answers[i];
        questionEl.appendChild(buttonEl);
            buttonEl.addEventListener("click", checkAnswer);
       
            }     
       }

// //WHEN I click the start button
// THEN a timer starts and I am presented with a question

function startQuiz(){
    clear();
    runTimer();
    quiz(); 
}

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

function checkAnswer(event){
    // matches? unfortunately could not get matches method to work for me
    var buttonEl = event.target;
    if(buttonEl.textContent === myQuestions[questionIndex].correctAnswer) {
        // buttonEl.value.push(inputScore);
        console.log("Correct!")
        questionIndex++;
       
    }

    else{
        timeLeft -= 10;
        console.log("incorrect"); // replace later
        questionEl.innerHTML = " ";
        questionIndex++;
        
    }
    if(timeLeft <= 0 || questionIndex === myQuestions.length){
        endQuiz();
        questionEl.innerHTML=" ";
    }
    else{
        questionEl.innerHTML = " ";
        quiz(); 
    }  
    };

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

function endQuiz(){
    // localStorage.setItem("clickChoice")
    if(timeLeft <=0){
        timeLeft = 0;
    }
        clearInterval(timeInterval)
    
    var input = document.createElement("input");
    var buttonEl = document.createElement("button");
    // var inputScore = document.createElement("div");
    var textlEl = document.createElement("text");
    var allDoneEl = document.createElement("alldone");
    allDoneEl.textContent = ("All Done!  ");
    textlEl.textContent = "Enter initials: ";
    buttonEl.textContent = "Save";
    var scoreEl = document.createElement("div");
    // scoreEl.textContent = "Your final score is: " + score;
    container.append(allDoneEl);
    container.append(textlEl);
    container.append(input);
    // container.append(score);
    container.append(buttonEl);
    buttonEl.addEventListener("click", saveInput);
    
    };

// function finalScore (){
        
//         questionEl.appendChild(score);
//         renderQuiz();
//     };

    // WHEN the game is over
// THEN I can save my initials and my score 

function saveInput (){
    // localStorage.setItem("initials", JSON.stringify(input));
    // input.addEventListener("click", function(event){
    //     event.preventDefault();
    // });
    // var initialText = saveInitials.value;
    // saveInitials.push(initialText);
    // saveInitials.value = " ";
    // localStorage.setItem("score", JSON.stringify(inputScore));
    // var scoreText = inputScore.value;
    // scoreText = " ";
    container.innerHTML = " ";
    highScore();
};

function goBack (){
    questionEl.innerHTML = " ";
    window.location.reload();
}

function highScore (){
    var highScore = document.createElement("Highscore");
    highScore.textContent = highScorePage[scorePageIndex].h2;
    questionEl.appendChild(highScore);
    var score = document.createElement("score");
    var scoreList = document.createElement("scoreList");
    score.textContent = (inputScore);
    scoreList.textContent = (inputInitial);
    questionEl.appendChild(score);
    questionEl.appendChild(scoreList);
    for(i = 0; i < highScorePage[scorePageIndex].goBackClear.length; i++){
        var buttonEl = document.createElement("button");
        buttonEl.textContent= highScorePage[scorePageIndex].goBackClear[i];
        highScore.appendChild(buttonEl);
        questionEl.appendChild(buttonEl);
        buttonEl.addEventListener("click", goBack);
    };

};

function renderQuiz(){

};

startquizBtn.addEventListener("click", startQuiz);


// localStorage.setItem("score", JSON.stringify(score));
    // var inputScore = JSON.parse(localStorage.getItem())
    // var inputInitial = JSON.parse(localStorage.getItem("inputInitials"));
    // console.log();
    // console.log(event.target.parentNode.childNodes);
    // var inputInitial = event.target.parentNode.childNodes[1];
    // var inputScore = event.target.parentNode.childNodes[2];
    // console.log(inputInitial.value, inputScore.textContent);