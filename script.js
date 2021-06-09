var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "saurabh",
    score: 3,
  },

  {
    name: "sahil",
    score: 2,
  },
];

//array of objects
const questions = [
  {
    question: "Who is the really father of Jon Snow?",
    answer: "Rhaegar Targaryen",
  },
  {
    question: "Where did Ned Stark live?",
    answer: "Winterfell",
  },
  {
    question: "Where is the training temple of the Faceless Men?",
    answer: "Braavos",
  },
  {
    question: "Who has the honour of Killing Petyr Baelish?",
    answer: "Arya Stark",
  },
  {
    question: "Real Name of The Mountain?",
    answer: "Gregor Clegane",
  },
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " let's see if you know Game of Thrones");
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
