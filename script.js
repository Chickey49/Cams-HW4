const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);
const body = document.getElementById("body");
var secondsLeft = 60;
const timer = document.getElementById("timer");
var button = document.querySelectorAll("button");
var questionId = 0;
button.className = "btn btn-primary";
var timerInterval;
var highscores = document.getElementById("highscores");
highscores = document.createElement("button")
highscores.addEventListener("click", seeHighscores);


// list of possible questions
let currentQuestionId = 0;
let myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<js>",
            c: "<javascript>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is the correct syntax to display “Welcome” in an alert box using JavaScript?",
        answers: {
            a: "alertbox(“Welcome”);",
            b: "<alert(“Welcome”);>",
            c: "<msg(“Welcome”);>"
        },
        correctAnswer: "b"
    },
    {
        question: "Using _______ statement is how you test for a specific condition.",
        answers: {
            a: "<Switch>",
            b: "<For>",
            c: "<If>"
        },
        correctAnswer: "c"
    }
];

// start quiz
function startQuiz() {
    var start = document.getElementById('startDiv');
    var quiz = document.getElementById('quiz');

    start.className = "invisible";
    quiz.className = "visible";

    showQuestion();
    setTime();
}

// show question

function showQuestion() {
    var currentQuestion = myQuestions[questionId];
    // answer area
    var question = document.createElement("div");
    question.className += ("question");

    // answer buttonA
    var answerA = document.createElement("button");
    answerA.className += "btn-primary";
    answerA.addEventListener('click', () => checkAnswer(currentQuestion.answers.a));

    // answer buttonB
    var answerB = document.createElement("button");
    answerB.className += "btn-primary";
    answerB.addEventListener('click', () => checkAnswer(currentQuestion.answers.b));

    // answer buttonC 
    var answerC = document.createElement("button");
    answerC.className += "btn-primary";
    answerC.addEventListener('click', () => checkAnswer(currentQuestion.answers.c));
    // show question
    question.textContent = currentQuestion.question;
    answerA.textContent = currentQuestion.answers.a;
    answerB.textContent = currentQuestion.answers.b;
    answerC.textContent = currentQuestion.answers.c;
    quizContainer.appendChild(question);
    quizContainer.appendChild(answerA);
    quizContainer.appendChild(answerB);
    quizContainer.appendChild(answerC);
}



// check if answer matches predefined answer in myQuestions
function checkAnswer(answer) {
    let correctLetter = myQuestions[questionId].correctAnswer;
    if (myQuestions[questionId].answers[correctLetter] === answer) {
        alert("correct");
    }
    else {
        alert('incorrect');
        secondsLeft = secondsLeft - 10;
    }
    questionId++; // go to next question.
    quizContainer.innerHTML = ""; // blank out quiz container.
    if (questionId === myQuestions.length) {
        // at end of questions.
        return endQuiz();
    }
    showQuestion();

}



// show next question
/* the last question needs to stop time and display time left */
// function showNextQuestion(answer) {
//     // judge answer/ if correct, show next question
//     var question = myQuestions[currentQuestionId];
//     if (question.correctAnswer === answer) {
//         //  user chose correct
//     } else
//         // deduct time show next question 
//         secondsLeft = -10;
//     alert("wrong answer")
//     // showNextQuestion();

//     if (currentQuestionId < myQuestions.length) {
//         currentQuestionId++;
//     }
//     showQuestion(currentQuestionId);
// }

// timer
// var timer is already declared

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            alert("You lose!")
            secondsLeft = 0;
            return endQuiz();
        }
        console.log(timerInterval);

    }, 1000)
}

// local storage

/*
request users initials 
store timerInterval variable in local storage
show previous highscores
*/
function endQuiz() {
    clearInterval(timerInterval);
    console.log("quiz done");
    Highscore();
}

// clickable highscore



function seeHighscores (){
    // when we click highscore 
    var HSbutton = 
    HSbutton.className = "btn";
    // we see highscore list
}



function Highscore() {
    var finalTime = 60 - secondsLeft;
    // request username
    var username = prompt("enter username")

    var thisScore = {
        name: username,
        time: finalTime
    };
    var scores = JSON.parse(localStorage.getItem("scores")); // get list of all scores from storage.
    if (!scores) {
        scores = new Array();
    }
    scores.push(thisScore); // append score to scores array.
    localStorage.setItem("scores", JSON.stringify(scores));


    // localStorage.setItem("Username", username);
    // // store time left
    // localStorage.setItem("Time", finalTime);

    // //    score title
    // var title = document.createElement("h1");
    // title.textContent = "SCORE"
    // document.getElementById("results").append(title);

    var scoreData = document.createElement("ul");
    for (const s in scores) {
        var score = scores[s];
        scoreData += `<li>${score.name} in ${score.time} seconds</li>`;
    }
    scoreData += "</ul>"



    // show username

    document.getElementById("results").innerHTML = scoreData;

//     // show time
//     var HighscoreTimeHeading = document.createElement("h3");
//     HighscoreTimeHeading.textContent = localStorage.getItem("Time");
    // document.getElementById("results").append(HighscoreTimeHeading);

}

