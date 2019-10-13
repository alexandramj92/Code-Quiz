# Unit-04-Alexandra-Jackson
Homework#4 - Alexandra Jackson

## Description

This application was build in order to test the user's knowledge on different programming concepts. It is also designed to keep track of high scores and includes a timer. 

## Usage

The initial page contains a div with a title, description, and button labeled "Start Quiz"
In the upper lefthand corner, you can select "View Highscores" to see everyone's past high scores.
In the upper righthand corner, there is a timer that counts down from 75 seconds. 


Once you click on the "Start Quiz button", an event listener will trigger the first question to be generated and the timer to start counting down.

All questions are mutliple choice and are set up in an ordered list. When the user clicks on one of the options, an if statement will validate wether or not that answer is correct. 

If the answer is correct, the next question will appear on the screen.
If the answer is wrong, the timer gets decreased by 15 seconds and the user has the opportunity to try again. 


When the user has finished the quiz, the score is displayed and they must input their initials and click on the "Submit" button. The score is then displayed into the "View Highscores" section. In the "View Highscores" section, the user has the ability to clear all highscores. 