"use strict";

/**
  NOTES FOR FUNCTIONALITY OF APP:

  - Need to start off with ".starting-point" 
  - When user clicks on ".begin" button, removeClass ".starting-point", addClass ".quiz"
  - Load the first question
  - When user clicks on an answer, change fa-circle-thin to fa-circle
  - Register if the answer was correct or not
  - If correct, increment a counter which keeps track of correct answers
  - Display how many are correct in the ".collection"
  - ONLY addClass ".collection" after first question is answered
  - Move to next question, rinse and repeat
**/

$(document).ready(function(){
  // Increment this var when user clicks on correct answer
  var correct = 0;

  // Variable of scroll images to increment
  var scrolls = 0;

  // Increment through this array of objects for quiz
  // each object stores the question, the answers
  // one correct answer, three incorrect
  // quiz questions' objects index from 0 to 4
  // when user CLICKS on submit button, determine if correct, 
  // then move on to the next object in the array and display it to them
  var quiz = [{
    // index 0
    question: "What was the last element that Korra mastered, at the age of 17?",
    answers: ["Fire", "Air", "Water", "Earth"],
    correctAns: "Air"
  }, {
    // index 1
    question: "Who did Mako give his scarf to permanently?",
    answers: ["Asami", "Bolin", "Grandma Yin", "Korra"],
    correctAns: "Grandma Yin"
  }, {
    // index 2
    question: "What bending subskills do Mako and Bolin have, respectively?",
    answers: ["Lightning generation and lavabending", "Combustionbending and metalbending", "Lightning generation and metalbending", "Combustionbending and lavabending"],
    correctAns: "Lightning generation and lavabending"
  }, {
    // index 3
    question: "How many spirit portals are there at the end of the series?",
    answers: ["2", "3", "5", "1"],
    correctAns: "3"
  }, {
    // index 4
    question: "After leaving the South Pole in Book 4, how many months was Korra alone?",
    answers: ["3", "Less than 1", "6", "5"],
    correctAns: "6"
  }];

  // Starting a new instance of the quiz
  $(".begin").click(function(){
    console.log("Button clicked!");
    // Hide the first screen
    $(this).parent(".starting-point").hide();
    // After hiding, go up in DOM and back down to find quiz class, then show it
    $(this).parents(".container").find(".quiz").show();
    askQuestion();
  });

  var currentQuestionNum = 0;

  function askQuestion(){
    $(".quiz").show();
    $(".quiz").append('<h2 class="question">' + quiz[currentQuestionNum].question + '</h2>');
    $(".quiz").append('<ul class="fa-ul"></ul>');
      for (var a = 0; a < quiz[currentQuestionNum].answers.length; a++) {
        $(".fa-ul").append('<li><i class="fa-li fa fa-circle-thin"></i><span>' + quiz[currentQuestionNum].answers[a] + '</span></li>');
      };
    $(".quiz").append('<button class="submit">SUBMIT</button>');

    // Clicking to select answer (using Font Awesome circles)
    $("ul.fa-ul li").click(function(){
      if ($(this).children("i").hasClass("fa-circle-thin")) {
        $("ul.fa-ul li").children("i").removeClass("fa-circle").addClass("fa-circle-thin");
        $(this).children("i").removeClass("fa-circle-thin").addClass("fa-circle");
      } else if ($(this).children("i").hasClass("fa-circle")) {
        $("ul.fa-ul li").children("i").removeClass("fa-circle").addClass("fa-circle-thin");
        $(this).children("i").removeClass("fa-circle").addClass("fa-circle-thin");
      }
    });

    // Check to see if clicked circle is correct answer
    // If so, add it to the "correct" count to display to user
    $(".submit").click(function(){
      var answer = $(".fa-circle").parent().children("span").html();
      console.log(answer);
      if (quiz[currentQuestionNum].correctAns == answer) {
        correct++;
        scrolls++;
      }
      $(".numCorrect").html(correct);

      // Increment to get next question
      currentQuestionNum++;

      if (currentQuestionNum < quiz.length) {
        // Empty currect quiz div to make room for new question
        $(".quiz").empty();
        // Show collection after finishing 1st question
        $(".collection").show();
        askQuestion();
      } else if (currentQuestionNum >= quiz.length) {
        // Hide everything but results div once finished w/quiz
        $(".quiz").empty();
        $(".collection").empty();
        $(".results").show();
        for (var i = 0; i < scrolls; i++) {
          $(".collected-scrolls").append('<img src="images/small-scrolls.png" class="small-scrolls">');
        };
      }
    });
  };
});