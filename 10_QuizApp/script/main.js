class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }


    getQuestionIndex () {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer))
            {
                this.score++;
            }
            this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }

};


//Creating class for question

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
};


// Displaying Questions

function displayQuestion() {
    if(Quiz.isEnded) {
        showScores();
    }
    else {
        //Showing Next Question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

         //Showing Options for Question
         let choices = quiz.getQuestionIndex().choices;
         
         for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);         
         }

         showProgress();
    }
};


//Guess Function

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};


//Showing Quiz Progress

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML = 
    `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

//Showing Score 
function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2 id="score">You scored : ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">
            Take Quiz Again
        </a>
    </div>
    `;

    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};


// Creating Quiz Questions
let questions = [
    new Question(
        "1. How many months have 28 days?", ["2", "1", "All of them", "Depends if there's a leap year or not"], "All of them"
    ),
    new Question(
        "2. 3 + 2", ["2", "9", "5", "3"], "5"
    ),
    new Question(
        "3. 9 - 3", ["9", "3", "6", "4"], "6"
    ),
    new Question(
        "4. After 12pm and before 4pm is ____", ["Noon", "Morning", "Evening", "Night"], "Noon"
    ),
    new Question(
        "5. 9 * 6", ["54", "63", "45", "96"], "54"
    )
];

let quiz = new Quiz(questions);

// Displaying Question
displayQuestion();


// Adding Countdown

let time = 5;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(
        function() {
            if (quizTime <= 0) {
                clearInterval(quizTimer);
                showScores();
            }
            else {
                quizTime--; 
                let sec = Math.floor(quizTime % 60);
                let min = Math.floor(quizTime / 60) % 60;
                counting.innerHTML = `TIME : ${min} : ${sec}`;
            }
        }, 1000)
};


startCountdown();
