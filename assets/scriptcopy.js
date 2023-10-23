var startquizBtn = document.querySelector("#startquiz");
var timerEl = document.getElementById("timer");
var clearEl = document.querySelector("#clear");
var questionEl = document.querySelector("#questiontitle");
var highScoreEl = document.querySelector("#highscore");
var container = document.querySelector(".container");
var viewHighScoresEl = document.getElementById("viewhighscore");
var highScoreListSpan = document.querySelector("#listScores");
var timeLeft = 60;
var timeInterval ;
var questionIndex = 0;
var scorePageIndex = 0;
var initialInput = "";
var score = 0;

const highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

const highScorePage = [
    {
        h2: "Highscores:", 
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
        console.log("Correct!");
        score += 10;
        questionIndex++;
       
    }

    else{
        timeLeft -= 10;
        console.log("Incorrect"); // replace later
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
    finalScore = score;
    localStorage.setItem("finalScore", finalScore);
    highScores.push(finalScore);
    // render();
    };

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

function endQuiz(){
    if(timeLeft <=0){
        timeLeft = 0;
    }
    clearInterval(timeInterval);
    var input = document.createElement("input");//bar for initials
    var buttonEl = document.createElement("button");
    var textlEl = document.createElement("text");//"enter initials"
    var allDoneEl = document.createElement("alldone");
    

    allDoneEl.textContent = ("All Done!  ");
    textlEl.textContent = "Enter initials: ";
    buttonEl.textContent = "Save";
    container.append(allDoneEl);
    container.append(textlEl);
    container.append(input);
    container.append(buttonEl);
    buttonEl.addEventListener("click", function(event){
        event.preventDefault();
        initialInput = input.value;
        if(initialInput === " "){
            displayMessage("Initials must be submited.");
        }
        else {
            localStorage.setItem("initials", initialInput);
            highScores.push(initialInput);
            saveInput();
             };
    });
};

    // WHEN the game is over
// THEN I can save my initials and my score 


function saveInput (){
    finalScore= highScores;
    localStorage.setItem("highScores", JSON.stringify(highScores));

    const newHighScore = {
        initials: initialInput,
        score: finalScore,
    };

    const existingScoreIndex = highScores.findIndex(score => score.initials === initialInput);
    if(existingScoreIndex !== -1){
        if(finalScore > highScores[existingScoreIndex].score){
            highScores[existingScoreIndex.score = finalScore];
        }
    }
    else {
        highScores.push(newHighScore);
    };

    container.innerHTML = " ";
    highScore();
    // updateHighScores();
};

function goBack (){
    window.location.reload();
};


function highScore (){
    initialInput = (localStorage.getItem("initials"));
    score =localStorage.getItem("finalScore");
    
    var highScore = document.createElement("Highscore");
    highScore.textContent = highScorePage[scorePageIndex].h2;
    questionEl.appendChild(highScore);

    var initialsText = document.createElement("ul");
    initialsText.textContent = "Initials: " + initialInput;

    var scoreText = document.createElement("ul");
    scoreText.textContent = "score: " + score;
    
    var highScoreList = document.createElement("div");
    highScoreList.textContent = "Initials: " + initialInput + "  score: " + score;
    questionEl.appendChild(highScoreList);

    highScores.sort((a,b) => b.score - a.score);

    highScoreListSpan.textContent = highScores;

    for(i = 0; i < highScores.lenth; i++) {
        highScoreListSpan.textContent = highScores;
        highScoreList = highScores[i];
        highScoreList.textContent = "Initials: " + highScores[i].initialInput + "  score: " + highScores[i].score;
        highScoreList.setAttribute("data-index", i);
        questionEl.appendChild(highScoreList);
    };


    var buttonEl = document.createElement("button");
    buttonEl.textContent= "Home"
    questionEl.appendChild(buttonEl);
    buttonEl.addEventListener("click", goBack);

    var buttonEl = document.createElement("button");
    buttonEl.textContent= "Clear Score"
    questionEl.appendChild(buttonEl);
    buttonEl.addEventListener("click", clearScore);

    
};

function clearScore (){
    score = 0;
    localStorage.removeItem("finalScore", finalScore);
    questionEl.innerHTML = " ";
    highScore();
};


viewHighScoresEl.addEventListener("click", saveInput);

// function render(){
//     highScoreList = highScores;
//     var highScores = JSON.parse(localStorage.getItem(highScores));
//     highScoreListSpan.textContent = highScores;
//     for (let i = 0; i < highScores; i++){
        
//         var highScoreList = document.createElement("div");
//         highScoreList.textContent = "Initials: " + highScores[i].initialInput + "  score: " + highScores[i].score;
//         questionEl.appendChild(highScoreList);
//     };

// };

startquizBtn.addEventListener("click", startQuiz);
