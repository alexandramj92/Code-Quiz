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
var initialsSubmit = document.createElement ("button");
initialsSubmit.setAttribute ("type", "submit");


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

// Display Submission Page
function displaySubmission () {
    questionEl.innerHTML = "";
    answerDIV.innerHTML = "";
    scoreDis.textContent = "All done !";
    initialsSubmit.textContent = "Submit";
    var finalScore = 2-wrongAnswer;
    scoreValDis.textContent = "Your score is " + finalScore + "!";

    

    questionDIV.appendChild(scoreDis);
    questionDIV.appendChild(scoreValDis);
    questionDIV.appendChild(initialsForm);
    initialsForm.appendChild(initialsInput);
    initialsForm.appendChild(initialsSubmit);
    console.log("displaySubmission");

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

initialsSubmit.addEventListener("click", function(){

});



