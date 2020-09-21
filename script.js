/*
- create an array
- function to build quiz
- function to show results

*/

// Array of questions
var questionArray = [{
    question: "JQuery is a:",
    answers: {
      a: "JavaScript Library",
      b: "JavaScript Language",
      c: "JavaScript Method"
    },
    correctAnswer: "a"
  },
  {
    question: "Which sign does jQuery use as a shortcut for jQuery:",
    answers: {
      a: "the % sign",
      b: "the ? sign",
      c: "the $ sign"
    },
    correctAnswer: "c"
  },
  {
    question: "Which jQuery method is used to hide selected elements?",
    answers: {
      a: "hidden()",
      b: "hide()",
      c: "display(none)"
    },
    correctAnswer: "b"
  },
  {
    question: "What scripting language is jQuery written in?",
    answers: {
      a: "VBScript",
      b: "JavaScript",
      c: "Java"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of these is NOT a valid comment in JavaScript?",
    answers: {
      a: "// This is a comment",
      b: "/* This is a comment */",
      c: "/* This is a comment"
    },
    correctAnswer: "c"
  }
];


var quizBody = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submit = document.getElementById('submit');


/* Function to build question  */

function quizFunc() {
  // variable to store the HTML output
  var finalResult = [];

  // for each question
  questionArray.forEach(
    (questions, number) => {
      var answers = [];

      // and for each answer
      for (key in questions.answers) {

        // add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${number}" value="${key}">
            ${key}: ${questions.answers[key]}
        
          </label>`
        );
      }

      // add this question and its answers to the output
      finalResult.push(
        `<div class="question">${questions.question} </div>
        <div class="answers">${answers.join('')} </div>  <br>`
      );
    }
  );

  // put the output in the html body 
  quizBody.innerHTML = finalResult.join('');
}

/* Function to show result  */

function show() {

  // gather answer  from our quiz

  // The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.
  var checkAnswer = quizBody.querySelectorAll('.answers');

  var numCorrect = 0;

  // for each question
  questionArray.forEach((questions, number) => {

    // find selected answer
    const answerContainer = checkAnswer[number];
    const selector = `input[name=question${number}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === questions.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;
    }
  });

  // show number of correct answers out of total
  $("#results").text(`The  result is   : ${numCorrect}  out of  ${questionArray.length}`)
}

// display quiz 
quizFunc();

// on submit, show results
submit.addEventListener('click', show);
