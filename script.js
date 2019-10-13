// Questions object

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        title: "The condition in an if / else statement is enclosed within____. ",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "",
        choices: "",
        answer: ""
    },
];

// Question elements

var questionEl = document.createElement("h3");

var choice1 = document.createElement ("button");
choice1.setAttribute ("type","button");

var choice2 = document.createElement ("button");
choice2.setAttribute ("type","button");

var choice3 = document.createElement("button");
choice3.setAttribute ("type","button");

var choice4 = document.createElement("button");
choice4.setAttribute ("type","button");


// Initial Page

var startBtn = document.getElementById("btnStart");


// Quiz Section 

var quizEl = document.getElementById("quizArea");
var brEl = document.createElement("br");
var questionDIV = document.createElement("div");
questionDIV.setAttribute ("id", "question-div");
var quizCont = document.getElementById("quiz-container");
var answerDIV = document.createElement("div");
answerDIV.setAttribute ("id", "answers");

// Submission page elements

var subPage = document.createElement("div");
subPage.setAttribute ("id", "subPage-cont");

var scoreDis = document.createElement ("h3");

var scoreValDis = document.createElement("div");
scoreValDis.setAttribute ("id", "score-value");

var initialsForm = document.createElement("form");

var initialsInput = document.createElement("input");
initialsInput.setAttribute("id", "initialsInput");

var initialsSubmit = document.createElement ("button");
initialsSubmit.setAttribute ("type", "submit");


// Highscores page elements

var scoresPage = document.createElement("div");
scoresPage.setAttribute ("id", "scores-cont");

var highscoreDis = document.createElement ("h3");

var highscoreVal = document.createElement ("div");
highscoreVal.setAttribute ("id", "highscoreVal");

var clearScores = document.createElement ("button");



//Functions and Event Listeners

startBtn.addEventListener("click", function(){
    quizEl.innerHTML = "";
    console.log("start button clicked");

    quizCont.appendChild(questionDIV);


    displayquestion();


});

var questionIndex = 0;
var wrongAnswer = 0;
var questionNum = 0;
var finalScore = 2-wrongAnswer;
var highscoresList = [];



function displayquestion(){

    questionEl.textContent = questions[questionIndex]["title"];
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];

    console.log(questions[questionIndex]);
    questionDIV.appendChild(questionEl);
    questionDIV.appendChild(answerDIV);
    answerDIV.appendChild(choice1);
    answerDIV.appendChild(choice2);
    answerDIV.appendChild(choice3);
    answerDIV.appendChild(choice4);

    questionNum ++;
    console.log("question : " + questionNum);

}

// Display Submission Page Function
function displaySubmission () {
    questionEl.innerHTML = "";
    answerDIV.innerHTML = "";
    scoreDis.textContent = "All done !";
    initialsSubmit.textContent = "Submit";
    scoreValDis.textContent = "Your score is " + finalScore + "!";

    

    questionDIV.appendChild(scoreDis);
    questionDIV.appendChild(scoreValDis);
    questionDIV.appendChild(initialsForm);
    initialsForm.appendChild(initialsInput);
    initialsForm.appendChild(initialsSubmit);
    console.log("displaySubmission");

}


// Display Highscores Page Function

 function displayHighscores () {
    highscoreDis.textContent = "High Scores";
    quizEl.appendChild(highscoreDis);
    quizEl.appendChild(highscoreVal);
    highscoreVal.innerHTML = "";


    for (var i = 0; i<highscoresList.length; i++){

        var highscore = highscoresList[i];

        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", i);
        highscoreVal.appendChild(li);
    }
    console.log(highscoresList);

    // set the highscoreVal div to the highscoresList array
    // highscoreVal.textContent = highscoresList;
    // append highscoreVal div to quizEl div
    // quizEl.appendChild(highscoreVal);
 }

 function inti(){
     //Get stored todos from localStorage
     //Parsing JSON string to an object
     var storedHighscores = JSON.parse(localStorage.getItem("highscoresItem"));
    if (storedTodos !== null){
        highscoresList = storedHighscores;
    }

    displayHighscores();

 }


 

//checks answer compared to input
answerDIV.addEventListener("click", function(event){
    event.preventDefault();
    if (event.target.textContent === questions[questionIndex].answer){
        console.log("correct answer");
    }

    else  {
        wrongAnswer++;
        console.log("wrong answer");
    }

    questionIndex ++;
   
    displayquestion();
// if you have answered all the questions the submission page is displayed
    if (questionNum > 2){

        console.log("End of questions!");
        displaySubmission();
    }



})

//function to store initials and score to local storage
// Renders the Highscores Page

initialsSubmit.addEventListener("click", function(event){
    event.preventDefault();
    console.log ("Submit button clicked");
    //local storage for high scores
    var initials = initialsInput.value;
    var highscore = finalScore;
    localStorage.setItem("initials", initials);
    localStorage.setItem("highscore", highscore);

    // questionDIV.innerHTML = "";

     // get these items from local storage
    //  var initials = localStorage.getItem("initials");
    //  var highscore = localStorage.getItem("highscore");
     // display local storage items as follows
     var highscoresItem = "user: " + initials + " score: " + highscore;
     localStorage.setItem("highscoresItem", JSON.stringify(highscoresItem));
     // push highscoresItem into the highscoresList array
     highscoresList.push(highscoresItem);

    displayHighscores();

});



